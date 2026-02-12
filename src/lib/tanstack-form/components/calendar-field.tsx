"use client";

import {
	DatePickerField,
	type DatePickerFieldProps,
} from "@/lib/tanstack-form/components/date-picker-field";

type CalendarFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	disabled?: boolean;
	calendarProps?: DatePickerFieldProps["calendarProps"];
	buttonProps?: DatePickerFieldProps["buttonProps"];
};

export function CalendarField(props: CalendarFieldProps) {
	return <DatePickerField mode="single" {...props} />;
}
