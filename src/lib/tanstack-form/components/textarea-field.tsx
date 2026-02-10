"use client";

import type * as React from "react";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type TextareaFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	textareaProps?: Omit<React.ComponentProps<typeof Textarea>, "value" | "onChange" | "onBlur" | "id" | "name">;
};

export function TextareaField({
	label,
	description,
	placeholder,
	textareaProps,
}: TextareaFieldProps) {
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name}>{label}</FieldLabel>
			<Textarea
				id={field.name}
				name={field.name}
				placeholder={placeholder}
				value={field.state.value ?? ""}
				onBlur={field.handleBlur}
				onChange={(event) => field.handleChange(event.target.value)}
				aria-invalid={isInvalid}
				{...textareaProps}
			/>
			{description ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError errors={field.state.meta.errors as Array<{ message?: string } | undefined>} />
		</Field>
	);
}
