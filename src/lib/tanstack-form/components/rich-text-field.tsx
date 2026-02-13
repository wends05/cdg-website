"use client";

import { RichTextEditor } from "@/components/rich-text-editor";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type RichTextFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	disabled?: boolean;
};

export function RichTextField({
	label,
	description,
	placeholder,
	disabled,
}: RichTextFieldProps) {
	const field = useFieldContext<string>();
	const isInvalid =
		field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel>{label}</FieldLabel>
			<div onBlurCapture={field.handleBlur}>
				<RichTextEditor
					value={field.state.value}
					placeholder={placeholder}
					disabled={disabled}
					onChange={(nextValue) => field.handleChange(nextValue)}
				/>
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
