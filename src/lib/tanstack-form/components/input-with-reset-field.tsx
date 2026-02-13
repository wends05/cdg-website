"use client";

import { RiRestartLine } from "@remixicon/react";
import type * as React from "react";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useFieldContext } from "@/lib/tanstack-form/hooks";

type InputWithResetFieldProps = {
	label: string;
	description?: string;
	placeholder?: string;
	displayReset?: boolean;
	onReset?: () => void;
	onValueChange?: (nextValue: string) => void;
	resetDisabled?: boolean;
	inputProps?: Omit<
		React.ComponentProps<typeof InputGroupInput>,
		"value" | "onChange" | "onBlur" | "id" | "name"
	>;
};

export function InputWithResetField({
	label,
	description,
	placeholder,
	displayReset = true,
	onReset,
	onValueChange,
	resetDisabled = false,
	inputProps,
}: InputWithResetFieldProps) {
	const field = useFieldContext<string>();
	const isInvalid =
		field.state.meta.isTouched && field.state.meta.errors.length > 0;

	return (
		<Field data-invalid={isInvalid}>
			<FieldLabel htmlFor={field.name}>{label}</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id={field.name}
					name={field.name}
					placeholder={placeholder}
					value={field.state.value ?? ""}
					onBlur={field.handleBlur}
					onChange={(event) => {
						const nextValue = event.target.value;
						field.handleChange(nextValue);
						onValueChange?.(nextValue);
					}}
					aria-invalid={isInvalid}
					{...inputProps}
				/>
				{displayReset ? (
					<InputGroupAddon align="inline-end">
						<InputGroupButton
							type="button"
							size="icon-xs"
							aria-label="Reset input"
							disabled={resetDisabled}
							onClick={onReset}
						>
							<RiRestartLine />
						</InputGroupButton>
					</InputGroupAddon>
				) : null}
			</InputGroup>
			{description ? <FieldDescription>{description}</FieldDescription> : null}
			<FieldError
				errors={
					field.state.meta.errors as Array<{ message?: string } | undefined>
				}
			/>
		</Field>
	);
}

export type { InputWithResetFieldProps };
