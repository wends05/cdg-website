"use client";

import type * as React from "react";
import type { Mode } from "react-day-picker";
import { DatePicker, type DatePickerValue } from "@/components/ui/date-picker";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type CalendarProps = Omit<
	React.ComponentProps<typeof DatePicker>,
	"mode" | "value" | "onChange" | "placeholder" | "disabled" | "buttonProps"
>["calendarProps"];

type ButtonProps = Omit<
	React.ComponentProps<typeof DatePicker>,
	"mode" | "value" | "onChange" | "placeholder" | "disabled" | "calendarProps"
>["buttonProps"];

type DatePickerFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	mode?: Mode;
	disabled?: boolean;
	calendarProps?: CalendarProps;
	buttonProps?: ButtonProps;
};

export function DatePickerField({
	label,
	description,
	placeholder,
	mode = "single",
	disabled,
	calendarProps,
	buttonProps,
}: DatePickerFieldProps) {
	const field = useFieldContext<DatePickerValue | null>();
	const isInvalid =
		field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel>{label}</FieldLabel>
			<div onBlurCapture={field.handleBlur}>
				<DatePicker
					mode={mode}
					value={field.state.value ?? undefined}
					onChange={(value) => field.handleChange(value ?? null)}
					placeholder={placeholder}
					disabled={disabled}
					calendarProps={calendarProps}
					buttonProps={buttonProps}
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

export type { DatePickerFieldProps };

