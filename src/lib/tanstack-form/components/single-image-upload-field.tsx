"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dropzone,
	DropzoneContent,
	DropzoneEmptyState,
} from "@/components/ui/dropzone";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type SingleImageUploadFieldProps = {
	label: string;
	description?: string;
	disabled?: boolean;
	onFileChange?: (file: File | null) => void;
};

export function SingleImageUploadField({
	label,
	description,
	disabled,
	onFileChange,
}: SingleImageUploadFieldProps) {
	const field = useFieldContext<File | null>();
	const isInvalid =
		field.state.meta.isTouched && field.state.meta.errors.length > 0;
	const selectedFile = field.state.value;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel>{label}</FieldLabel>
			<div onBlurCapture={field.handleBlur} className="space-y-3">
				<Dropzone
					src={selectedFile ? [selectedFile] : undefined}
					disabled={disabled}
					maxFiles={1}
					maxSize={64 * 1024 * 1024}
					accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif"] }}
					onDrop={(acceptedFiles) => {
						const nextFile = acceptedFiles[0] ?? null;
						field.handleChange(nextFile);
						onFileChange?.(nextFile);
					}}
				>
					<DropzoneContent />
					<DropzoneEmptyState />
				</Dropzone>
				{selectedFile ? (
					<div className="flex items-center justify-between rounded-md border px-3 py-2">
						<p className="truncate text-sm text-muted-foreground">
							Selected: {selectedFile.name}
						</p>
						<Button
							type="button"
							size="sm"
							variant="ghost"
							onClick={() => {
								field.handleChange(null);
								onFileChange?.(null);
							}}
						>
							<X />
							Remove
						</Button>
					</div>
				) : null}
			</div>
			{description ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError
				errors={
					field.state.meta.errors as Array<{ message?: string } | undefined>
				}
			/>
		</Field>
	);
}

