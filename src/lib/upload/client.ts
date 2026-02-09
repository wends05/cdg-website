"use client";

import { genUploader } from "uploadthing/client";

import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { createAppError, fail, type Result, tryCatch } from "@/lib/result";

type UploadResult = { ufsUrl?: string | null };
type UploadFilesFn = (
  slug: "imageUploader",
  opts: { files: File[] },
) => Promise<UploadResult[]>;

const { uploadFiles } = genUploader<OurFileRouter>();

function getFirstFileFromList(files: FileList | File[]): File | null {
  const list =
    typeof FileList !== "undefined" && files instanceof FileList
      ? Array.from(files)
      : files;
  return list[0] ?? null;
}

/**
 * Uploads a single event image with a provided UploadThing upload function.
 * Intended for reusable logic and easier testing/mocking.
 */
export async function uploadEventImageWith(
  file: File,
  upload: UploadFilesFn,
): Promise<Result<string>> {
  if (!file) {
    return fail(createAppError("VALIDATION", "An image file is required."));
  }

  return tryCatch(async () => {
    const uploads = await upload("imageUploader", { files: [file] });
    const imageUrl = uploads[0]?.ufsUrl;

    if (!imageUrl) {
      throw createAppError(
        "UPLOAD",
        "Upload completed but no image URL was returned.",
      );
    }

    return imageUrl;
  }, "UPLOAD");
}

/**
 * Uploads one image via UploadThing and returns the canonical `ufsUrl`.
 */
export async function uploadEventImage(file: File): Promise<Result<string>> {
  return uploadEventImageWith(file, uploadFiles as UploadFilesFn);
}

/**
 * Accepts FileList/File[] and uploads only the first file.
 * Returns a VALIDATION error when no files are provided.
 */
export async function uploadEventImageFromList(
  files: FileList | File[],
): Promise<Result<string>> {
  const file = getFirstFileFromList(files);

  if (!file) {
    return fail(
      createAppError("VALIDATION", "Select at least one image file."),
    );
  }

  return uploadEventImage(file);
}
