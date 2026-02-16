export type AppErrorCode =
  | "UNKNOWN"
  | "NOT_FOUND"
  | "VALIDATION"
  | "NETWORK"
  | "FIRESTORE"
  | "UPLOAD";

export type AppError = {
  code: AppErrorCode;
  message: string;
  cause?: unknown;
};

export type Result<T> =
  | { data: T; error: null }
  | { data: null; error: AppError };

/**
 * Creates a normalized application error object.
 * Use this when throwing domain-level validation/runtime errors.
 */
export function createAppError(
  code: AppErrorCode,
  message: string,
  cause?: unknown,
): AppError {
  return { code, message, cause };
}

/**
 * Wraps successful values in the standard Result shape.
 */
export function ok<T>(data: T): Result<T> {
  return { data, error: null };
}

/**
 * Wraps failures in the standard Result shape.
 */
export function fail<T = never>(error: AppError): Result<T> {
  return { data: null, error };
}

function inferCodeFromError(error: unknown): AppErrorCode {
  if (typeof error === "object" && error !== null) {
    const maybeCode = (error as { code?: unknown }).code;
    if (typeof maybeCode === "string") {
      if (maybeCode === "VALIDATION") return "VALIDATION";
      if (maybeCode === "NOT_FOUND") return "NOT_FOUND";
      if (maybeCode === "UPLOAD") return "UPLOAD";
      if (maybeCode.includes("network")) return "NETWORK";
      if (maybeCode.startsWith("firestore/")) return "FIRESTORE";
      if (maybeCode.startsWith("storage/")) return "UPLOAD";
    }
  }

  if (error instanceof Error) {
    const message = error.message.toLowerCase();
    if (message.includes("network")) return "NETWORK";
    if (message.includes("not found")) return "NOT_FOUND";
    if (message.includes("upload")) return "UPLOAD";
    if (message.includes("firestore")) return "FIRESTORE";
    if (message.includes("invalid")) return "VALIDATION";
  }

  return "UNKNOWN";
}

function inferMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "object" && error !== null) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === "string" && message.length > 0) return message;
  }
  return "An unexpected error occurred.";
}

/**
 * Converts unknown thrown values into a stable AppError.
 * If provided, `fallbackCode` overrides inferred error-code detection.
 */
export function normalizeError(
  error: unknown,
  fallbackCode?: AppErrorCode,
): AppError {
  const code = fallbackCode ?? inferCodeFromError(error);
  return createAppError(code, inferMessage(error), error);
}

/**
 * Executes an async function and returns a Result object instead of throwing.
 *
 * @typeParam T - Successful return type of the async operation.
 * @param fn - Async operation to run.
 * @param fallbackCode - Optional explicit AppErrorCode to use on failure.
 * @returns `{ data, error }` where only one side is populated.
 *
 * @example
 * const result = await tryCatch(() => getEvents(), "FIRESTORE");
 * if (result.error) return console.error(result.error.message);
 * console.log(result.data);
 */
export async function tryCatch<T>(
  fn: () => Promise<T>,
  fallbackCode?: AppErrorCode,
): Promise<Result<T>> {
  try {
    const data = await fn();
    return ok(data);
  } catch (error) {
    return fail(normalizeError(error, fallbackCode));
  }
}
