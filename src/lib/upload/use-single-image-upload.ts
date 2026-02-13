"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { uploadSingleImage } from "@/lib/upload/client";

export function useSingleImageUpload() {
	const [file, setFileState] = useState<File | null>(null);
	const [previewUrl, setPreviewUrl] = useState<string | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadError, setUploadError] = useState<string | null>(null);
	const fileRef = useRef<File | null>(null);

	useEffect(() => {
		if (!file) {
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

	const uploadSelected = useCallback(async () => {
		const selectedFile = fileRef.current;
		if (!selectedFile) {
			setUploadError("Please select an image first.");
			return null;
		}

		setIsUploading(true);
		setUploadError(null);
		try {
			const result = await uploadSingleImage(selectedFile);
			return result;
		} catch {
			setUploadError("Failed to upload image. Please try again.");
			return null;
		} finally {
			setIsUploading(false);
		}
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
