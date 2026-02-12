"use client";

import { toast } from "sonner";
import type z from "zod";
import { addParticipantToEvent } from "@/actions/participants";
import { Button } from "@/components/ui/button";
import {
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { tryCatch } from "@/lib/result";
import { useAppForm } from "@/lib/tanstack-form/hooks";
import { ParticipantRecordSchema } from "@/types/domain";

const CreateParticipantSchema = ParticipantRecordSchema.omit({
	id: true,
});

type CreateParticipantInput = z.infer<typeof CreateParticipantSchema>;

interface CreateParticipantFormProps {
	eventId: string;
	onSuccess?: () => void;
}

export default function CreateParticipantForm({
	eventId,
	onSuccess,
}: CreateParticipantFormProps) {
	const defaultValues: CreateParticipantInput = {
		name: "",
		email: "",
	};

	const form = useAppForm({
		defaultValues,
		validators: {
			onSubmit: CreateParticipantSchema,
		},
		onSubmit: async ({ value }) => {
			const { error } = await tryCatch(() =>
				addParticipantToEvent(value.email, value.name, eventId),
			);
			if (error) {
				toast.error(`Failed to add participant: ${error.message}`);
				return;
			}

			toast.success("Participant added.");
			onSuccess?.();
		},
	});

	return (
		<DialogContent className="sm:max-w-md">
			<DialogHeader>
				<DialogTitle>Add A Participant</DialogTitle>
			</DialogHeader>

			<form
				className="space-y-4 py-4"
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();
					form.handleSubmit();
				}}
			>
				<form.AppField name="name">
					{(field) => (
						<field.TextField
							label="Name"
							placeholder="John Doe"
							inputProps={{ required: true }}
						/>
					)}
				</form.AppField>

				<form.AppField name="email">
					{(field) => (
						<field.TextField
							label="Email"
							placeholder="john@example.com"
							inputProps={{ type: "email", required: true }}
						/>
					)}
				</form.AppField>
				<div className="flex items-center gap-3 justify-end">
					<DialogClose render={<Button type="button" variant="outline" />}>
						Cancel
					</DialogClose>
					<form.AppForm>
						<form.SubmitButton pendingText="Adding...">Save</form.SubmitButton>
					</form.AppForm>
				</div>
			</form>
		</DialogContent>
	);
}
