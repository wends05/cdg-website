"use client";

import type * as React from "react";
import { Button } from "@/components/ui/button";
import { useFormContext } from "@/lib/tanstack-form/hooks";

type SubmitButtonProps = {
	children?: React.ReactNode;
	pendingText?: string;
	buttonProps?: Omit<React.ComponentProps<typeof Button>, "type" | "disabled" | "children">;
};

export function SubmitButton({
	children = "Submit",
	pendingText = "Submitting...",
	buttonProps,
}: SubmitButtonProps) {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(state) => ({ isSubmitting: state.isSubmitting, canSubmit: state.canSubmit })}>
			{({ isSubmitting, canSubmit }) => (
				<Button
					type="submit"
					disabled={isSubmitting || !canSubmit}
					aria-busy={isSubmitting}
					{...buttonProps}
				>
					{isSubmitting ? pendingText : children}
				</Button>
			)}
		</form.Subscribe>
	);
}
