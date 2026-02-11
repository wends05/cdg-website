"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import z from "zod";
import { useAppForm } from "@/lib/tanstack-form/hooks";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

interface GetCertificateProps {
	eventName: string;
	eventSlug: string;
}

const defaultValues = {
	email: "",
};

export default function GetCertificate({
	eventName,
	eventSlug,
}: GetCertificateProps) {
	const router = useRouter();
	// overkill but why not
	const form = useAppForm({
		defaultValues,
		validators: {
			onSubmit: z.object({
				email: z.email("Please enter a valid email address"),
			}),
		},
		onSubmit: async ({ value }) => {
			router.push(`/events/${eventSlug}/certificate?email=${value.email}`);
		},
	});
	return (
		<section className="bg-blue-600 px-4 py-16 text-white sm:px-6 sm:py-20">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-balance text-3xl leading-tight font-extrabold sm:text-5xl">
					If you have joined {eventName},{" "}
					<span className="text-yellow-400">get your certificate here!</span>
				</h2>

				<Card className="mt-8">
					<CardHeader className="text-start">
						<CardTitle>Get Your Certificate Here</CardTitle>
						<CardDescription>
							Enter your email address to receive your certificate for attending{" "}
							{eventName}.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form className="space-y-5" onSubmit={e => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit()
            }}>
							<form.AppField name="email">
								{(field) => (
									<field.TextField
										label="Email Address"
										placeholder="Enter your email"
									/>
								)}
							</form.AppField>
							<form.AppForm>
								<form.SubmitButton
									buttonProps={{
										className: "w-full",
									}}
								/>
							</form.AppForm>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
