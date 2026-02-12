"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import z from "zod";
import { createEvent } from "@/actions/events";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import parseSlug from "@/lib/helpers/parse-slug";
import { useAppForm } from "@/lib/tanstack-form/hooks";
import { useSingleImageUpload } from "@/lib/upload/use-single-image-upload";
import { EventRecordSchema } from "@/types/domain";

const CreateEventSchema = EventRecordSchema.omit({
	id: true,
	imageUrl: true,
}).extend({
	imageFile: z.file().nullable(),
	date: z.date(),
});

type CreateEventInput = z.infer<typeof CreateEventSchema>;

export default function CreateEventForm() {
	const router = useRouter();
	const imageUpload = useSingleImageUpload();
	const [isSlugAutoSync, setIsSlugAutoSync] = useState(true);
	const today = new Date();
	const minDate = new Date(
		today.getFullYear(),
		today.getMonth(),
		today.getDate(),
	);
	const maxDate = new Date(today.getFullYear() + 10, 11, 31);

	const defaultValues: CreateEventInput = {
		date: new Date(),
		details: "",
		imageFile: null,
		name: "",
		slug: "",
	};
	const form = useAppForm({
		defaultValues,
		validators: {
			onSubmit: CreateEventSchema.superRefine((value, context) => {
				if (!value.imageFile) {
					context.addIssue({
						code: "custom",
						message: "Please select an image for the event.",
						path: ["imageFile"],
					});
				}
			}),
		},
		onSubmit: async ({ value }) => {
			console.log("Submitting form with value:", value);
			const uploadResult = await imageUpload.uploadSelected();
			if (uploadResult.error) {
				toast.error(uploadResult.error.message);
				return;
			}

			const finalData = EventRecordSchema.parse({
				date: value.date,
				details: value.details,
				imageUrl: uploadResult.data,
				name: value.name,
				slug: value.slug,
			});

			await createEvent(finalData);

			toast.success("Event created.");
			router.push("/events/admin");
		},
	});

	return (
		<Card className="mx-auto w-full">
			<CardHeader>
				<CardTitle>Create Event</CardTitle>
			</CardHeader>
			<CardContent>
				<form
					className="space-y-6 flex flex-col"
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
							{(field) => {
								return (
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
								);
							}}
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

					<form.AppField name="imageFile">
						{(field) => (
							<field.SingleImageUploadField
								label="Event Image"
								description="Upload one cover image (max 64MB)."
								onFileChange={imageUpload.setFile}
							/>
						)}
					</form.AppField>

					{imageUpload.uploadError ? (
						<p className="text-destructive text-sm">
							{imageUpload.uploadError}
						</p>
					) : null}

					<form.AppForm>
						<form.SubmitButton
							pendingText={
								imageUpload.isUploading ? "Uploading..." : "Creating..."
							}
							buttonProps={{ className: "w-full md:w-auto" }}
						>
							Create Event
						</form.SubmitButton>
					</form.AppForm>
				</form>
			</CardContent>
		</Card>
	);
}
