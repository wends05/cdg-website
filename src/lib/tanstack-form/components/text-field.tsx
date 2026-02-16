"use client";

import type * as React from "react";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type TextFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	inputProps?: Omit<React.ComponentProps<typeof Input>, "value" | "onChange" | "onBlur" | "id" | "name">;
};

export function TextField({
	label,
	description,
	placeholder,
	inputProps,
}: TextFieldProps) {
	const field = useFieldContext<string>();
	const isInvalid = field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name}>{label}</FieldLabel>
			<Input
				id={field.name}
				name={field.name}
				placeholder={placeholder}
				value={field.state.value ?? ""}
				onBlur={field.handleBlur}
				onChange={(event) => field.handleChange(event.target.value)}
				aria-invalid={isInvalid}
				{...inputProps}
			/>
			{description ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError errors={field.state.meta.errors as Array<{ message?: string } | undefined>} />
		</Field>
	);
}
