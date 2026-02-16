"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useFieldContext } from "@/lib/tanstack-form/hooks";
import { cn } from "@/lib/utils";

type CalendarProps = React.ComponentProps<typeof Calendar>;

type SingleDatePickerFieldProps = {
	label: string;
	placeholder?: string;
	description?: string;
	calendarProps?: Omit<
		CalendarProps,
		| "mode"
		| "selected"
		| "onSelect"
		| "startMonth"
		| "endMonth"
		| "captionLayout"
	>;
};

export function SingleDatePickerField({
	label,
	placeholder = "Pick a date",
	description,
	calendarProps,
}: SingleDatePickerFieldProps) {
	const field = useFieldContext<Date | null>();
	const [open, setOpen] = React.useState(false);
	const isInvalid =
		field.state.meta.isTouched && field.state.meta.errors.length > 0;
	const date = field.state.value;

	const today = new Date();
	const minDate = new Date(today.getFullYear(), today.getMonth() - 24);
	const maxDate = new Date(today.getFullYear() + 1, today.getMonth() + 12);

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel>{label}</FieldLabel>
			<div onBlurCapture={field.handleBlur}>
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger
						render={
							<Button
								type="button"
								variant="outline"
								className={cn(
									"w-full justify-start text-left font-normal",
									!date && "text-muted-foreground",
								)}
							>
								<CalendarIcon className="mr-2 size-4" />
								{date ? format(date, "PPP") : <span>{placeholder}</span>}
							</Button>
						}
					/>
					<PopoverContent className="w-auto p-0" align="start">
						<Calendar
							mode="single"
							selected={date ?? undefined}
							onSelect={(selectedDate) => {
								field.handleChange(selectedDate ?? null);
								setOpen(false);
							}}
							captionLayout="dropdown"
							disabled={{
								before: minDate,
							}}
							startMonth={minDate}
							endMonth={maxDate}
							{...calendarProps}
						/>
					</PopoverContent>
				</Popover>
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

export type { SingleDatePickerFieldProps };
