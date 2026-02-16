"use client";

import { genUploader } from "uploadthing/client";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

const { uploadFiles } = genUploader<OurFileRouter>();

/**
 * Uploads a file with the route "imageUploader" defined in ourFileRouter.
 */
export async function uploadSingleImage(file: File) {
  const uploadedFiles = await uploadFiles("imageUploader", { files: [file] });
  const firstFile = uploadedFiles[0];
  if (!firstFile) {
    throw new Error("No file was uploaded.");
  }

  return {
    ufsUrl: firstFile.ufsUrl,
    name: firstFile.name,
    key: firstFile.key,
  };
}
