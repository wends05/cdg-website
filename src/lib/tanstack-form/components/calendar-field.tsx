"use client";

import type * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldDescription, FieldError, FieldLabel } from "@/components/ui/field";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type CalendarFieldProps = {
	label: string;
	description?: string;
	calendarProps?: Omit<
		React.ComponentProps<typeof Calendar>,
		"mode" | "selected" | "onSelect"
	>;
};

export function CalendarField({
	label,
	description,
	calendarProps,
}: CalendarFieldProps) {
	const field = useFieldContext<Date | null>();
	const isInvalid = field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel>{label}</FieldLabel>
			<div onBlurCapture={field.handleBlur}>
				<Calendar
					mode="single"
					selected={field.state.value ?? undefined}
					onSelect={(value) => field.handleChange(value ?? null)}
					{...calendarProps}
				/>
			</div>
			{description ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError errors={field.state.meta.errors as Array<{ message?: string } | undefined>} />
		</Field>
	);
}
