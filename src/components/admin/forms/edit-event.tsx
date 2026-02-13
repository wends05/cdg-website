"use client";

import { RiPencilLine } from "@remixicon/react";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";
import { deleteEventImageByKey, updateEvent } from "@/actions/events";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import parseSlug from "@/lib/helpers/parse-slug";
import { tryCatch } from "@/lib/result";
import { useAppForm } from "@/lib/tanstack-form/hooks";
import {
	eventKeys,
	getEventQueryOptions,
	getEventsQueryOptions,
} from "@/lib/tanstack-query/query-options";
import { useSingleImageUpload } from "@/lib/upload/use-single-image-upload";
import { type EventRecord, EventRecordSchema } from "@/types/domain";

const EditEventSchema = EventRecordSchema.omit({
	id: true,
	imageUrl: true,
	imageKey: true,
}).extend({
	date: z.date(),
	imageFile: z.file().nullable(),
});

type EditEventInput = z.infer<typeof EditEventSchema>;

interface EditEventDialogProps {
	originalEventData: EventRecord;
	onSuccess?: () => void;
}

export function EditEventDialog({
	originalEventData,
	onSuccess,
}: EditEventDialogProps) {
	const queryClient = useQueryClient();
	const imageUpload = useSingleImageUpload();
	const [isSlugAutoSync, setIsSlugAutoSync] = useState(true);

	const defaultValues: EditEventInput = {
		date: originalEventData.date,
		details: originalEventData.details,
		imageFile: null,
		name: originalEventData.name,
		slug: originalEventData.slug,
	};

	const today = new Date();
	const minDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
	);
	const maxDate = new Date(today.getFullYear() + 10, 11, 31);

	const form = useAppForm({
		defaultValues,
		validators: {
			onSubmit: EditEventSchema,
		},
		onSubmit: async ({ value }) => {
			const eventId = originalEventData.id;
			if (!eventId) {
				toast.error("Unable to update event: missing event ID.");
				return;
			}

			let nextImageUrl = originalEventData.imageUrl;
			let nextImageKey = originalEventData.imageKey;
			let uploadedImage: Awaited<
				ReturnType<typeof imageUpload.uploadSelected>
			> = null;

			if (value.imageFile) {
				uploadedImage = await imageUpload.uploadSelected();
				if (!uploadedImage) {
					toast.error(
						`Image upload failed: ${imageUpload.uploadError || "Unknown error"}`,
					);
					return;
				}

				nextImageUrl = uploadedImage.ufsUrl;
				nextImageKey = uploadedImage.key;
			}

			const finalData = EventRecordSchema.omit({ id: true }).parse({
				date: value.date,
				details: value.details,
				imageKey: nextImageKey,
				imageUrl: nextImageUrl,
				name: value.name,
				slug: value.slug,
			});

			const { error: updateEventError } = await tryCatch(() =>
				updateEvent(eventId, finalData),
			);

			if (updateEventError) {
				if (uploadedImage) {
					await tryCatch(
						() => deleteEventImageByKey(uploadedImage.key),
						"UPLOAD",
					);
				}
				toast.error(`Failed to update event: ${updateEventError.message}`);
				return;
			}

			if (uploadedImage && originalEventData.imageKey) {
				const { error: deleteOldImageError } = await tryCatch(
					() => deleteEventImageByKey(originalEventData.imageKey),
					"UPLOAD",
				);

				if (deleteOldImageError) {
					toast.warning(
						"Event updated, but old image cleanup failed. Please retry later.",
					);
				}
			}

			await queryClient.invalidateQueries({
				queryKey: eventKeys.detail(eventId),
			});
			await queryClient.invalidateQueries(getEventsQueryOptions());

			toast.success("Event updated.");
			onSuccess?.();
		},
	});

	return (
		<DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
			<DialogHeader>
				<DialogTitle>Edit Event</DialogTitle>
			</DialogHeader>

			<form
				className="space-y-6 py-4"
				onSubmit={(event) => {
					event.preventDefault();
					event.stopPropagation();
					form.handleSubmit();
				}}
			>
				<div className="grid gap-6 md:grid-cols-2">
					<form.AppField
						name="name"
						listeners={{
							onChange: ({ value }) => {
								if (!isSlugAutoSync) return;
								form.setFieldValue("slug", parseSlug(String(value ?? "")));
							},
						}}
					>
						{(field) => (
							<field.TextField
								label="Event Name"
								placeholder="Community Dev Gathering"
							/>
						)}
					</form.AppField>

					<form.AppField name="slug">
						{(field) => (
							<field.InputWithResetField
								label="Slug"
								placeholder="community-dev-gathering"
								onValueChange={() => {
									setIsSlugAutoSync(false);
								}}
								onReset={() => {
									setIsSlugAutoSync(true);
									form.setFieldValue(
										"slug",
										parseSlug(form.getFieldValue("name")),
									);
								}}
								resetDisabled={
									isSlugAutoSync &&
									form.getFieldValue("slug") ===
										parseSlug(form.getFieldValue("name"))
								}
							/>
						)}
					</form.AppField>
				</div>

				<form.AppField name="date">
					{(field) => (
						<field.DatePickerField
							label="Event Date"
							description="Pick the day the event happens."
							placeholder="Select event date"
							mode="single"
							calendarProps={{
								fromDate: minDate,
								toDate: maxDate,
							}}
						/>
					)}
				</form.AppField>

				<form.AppField name="details">
					{(field) => (
						<field.RichTextField
							label="Event Details"
							description="Write event details with headings, lists, and links."
							placeholder="Write your event details..."
						/>
					)}
				</form.AppField>

				<div className="space-y-2">
					<p className="text-sm font-medium">Current Event Image</p>
					<div className="relative aspect-video w-full overflow-hidden rounded-md border bg-muted">
						<Image
							src={originalEventData.imageUrl}
							alt={originalEventData.name}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 720px"
						/>
					</div>
				</div>

				<form.AppField name="imageFile">
					{(field) => (
						<field.SingleImageUploadField
							label="Replace Event Image"
							description="Upload one new image to replace the current one, or leave empty to keep it."
							onFileChange={imageUpload.setFile}
						/>
					)}
				</form.AppField>

				{imageUpload.uploadError ? (
					<p className="text-destructive text-sm">{imageUpload.uploadError}</p>
				) : null}

				<div className="flex items-center gap-3 justify-end">
					<DialogClose render={<Button type="button" variant="outline" />}>
						Cancel
					</DialogClose>
					<form.AppForm>
						<form.SubmitButton
							pendingText={
								imageUpload.isUploading ? "Uploading..." : "Saving..."
							}
						>
							Save Changes
						</form.SubmitButton>
					</form.AppForm>
				</div>
			</form>
		</DialogContent>
	);
}

export function EditEventDialogWrapper() {
	const { id: eventId } = useParams<{ id: string }>();
	const { data: originalEventData } = useSuspenseQuery(
		getEventQueryOptions(eventId),
	);
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger
				render={
					<Button type="button">
						<RiPencilLine /> <span>Edit Event</span>
					</Button>
				}
			/>
			<EditEventDialog
				originalEventData={originalEventData}
				onSuccess={() => {
					setIsOpen(false);
				}}
			/>
		</Dialog>
	);
}
