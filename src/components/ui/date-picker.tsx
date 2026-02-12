"use client";

import { RiCalendarLine } from "@remixicon/react";
import type * as React from "react";
import { useState } from "react";
import type { DateRange, Mode } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type DatePickerValue = Date | DateRange | Date[] | undefined;

type CalendarProps = Omit<
	React.ComponentProps<typeof Calendar>,
	"mode" | "selected" | "onSelect"
>;

type TriggerButtonProps = Omit<
	React.ComponentProps<typeof Button>,
	"children" | "type" | "disabled"
>;

type DatePickerProps = {
	mode?: Mode;
	value?: DatePickerValue;
	onChange: (value: DatePickerValue) => void;
	placeholder?: string;
	disabled?: boolean;
	calendarProps?: CalendarProps;
	buttonProps?: TriggerButtonProps;
};

function formatDate(date: Date) {
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
	}).format(date);
}

function formatLabel(mode: Mode, value: DatePickerValue, placeholder: string) {
	if (!value) return placeholder;

	if (mode === "range") {
		const range = value as DateRange;
		if (!range.from) return placeholder;
		if (!range.to) return `${formatDate(range.from)} - ...`;
		return `${formatDate(range.from)} - ${formatDate(range.to)}`;
	}

	if (mode === "multiple") {
		const dates = value as Date[];
		if (!dates.length) return placeholder;
		if (dates.length === 1) return formatDate(dates[0]);
		return `${formatDate(dates[0])} +${dates.length - 1} more`;
	}

	return formatDate(value as Date);
}

export function DatePicker({
	mode = "single",
	value,
	onChange,
	placeholder = "Pick a date",
	disabled,
	calendarProps,
	buttonProps,
}: DatePickerProps) {
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						type="button"
						variant="outline"
						disabled={disabled}
						{...buttonProps}
						className={cn(
							"w-full justify-between font-normal",
							buttonProps?.className,
						)}
					>
						<span className={cn(!value && "text-muted-foreground")}>
							{formatLabel(mode, value, placeholder)}
						</span>
						<RiCalendarLine className="size-4 text-muted-foreground" />
					</Button>
				}
			/>

			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode={mode}
					selected={value as never}
					onSelect={(nextValue: DatePickerValue) => {
						onChange(nextValue);
						if (mode === "single") setOpen(false);
					}}
					{...calendarProps}
				/>
			</PopoverContent>
		</Popover>
	);
}

export type { DatePickerProps, DatePickerValue };
