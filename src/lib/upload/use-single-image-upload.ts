"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createAppError, fail, type Result } from "@/lib/result";
import { uploadEventImage } from "@/lib/upload/client";

export function useSingleImageUpload() {
  const [file, setFileState] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileRef = useRef<File | null>(null);

  useEffect(() => {
    if (!file) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const setFile = useCallback((nextFile: File | null) => {
    fileRef.current = nextFile;
    setFileState(nextFile);
    setUploadError(null);
  }, []);

  const clearFile = useCallback(() => {
    fileRef.current = null;
    setFileState(null);
    setUploadError(null);
  }, []);

  const uploadSelected = useCallback(async (): Promise<Result<string>> => {
    const selectedFile = fileRef.current;
    if (!selectedFile) {
      const error = createAppError(
        "VALIDATION",
        "Please select an image first.",
      );
      setUploadError(error.message);
      return fail(error);
    }

    setIsUploading(true);
    setUploadError(null);
    const result = await uploadEventImage(selectedFile);
    setIsUploading(false);

    if (result.error) {
      setUploadError(result.error.message);
      return result;
    }

    return result;
  }, []);

  return {
    file,
    previewUrl,
    isUploading,
    uploadError,
    setFile,
    clearFile,
    uploadSelected,
  };
}
