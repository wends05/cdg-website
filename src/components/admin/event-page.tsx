"use client";

import { RiArrowLeftSLine } from "@remixicon/react";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { sanitizeHtml } from "@/lib/sanitize-html";
import {
	getEventQueryOptions,
	getParticipantsByEventIdQueryOptions,
} from "@/lib/tanstack-query/query-options";
import CreateParticipantForm from "./forms/create-participant";
import { EditEventDialogWrapper } from "./forms/edit-event";
import ParticipantList from "./participant-list";

export default function EventPage() {
	const { id: eventId } = useParams<{ id: string }>();
	const { data: event } = useSuspenseQuery(getEventQueryOptions(eventId));
	const { data: participants } = useSuspenseQuery(
		getParticipantsByEventIdQueryOptions(eventId),
	);

	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(event.date);

	const sanitizedDetails = sanitizeHtml(event.details);

	const queryClient = useQueryClient();

	const handleParticipantAdded = () => {
		setIsDialogOpen(false);

		queryClient.invalidateQueries(
			getParticipantsByEventIdQueryOptions(eventId),
		);
	};

	const handleDialogOpenChange = (open: boolean) => {
		setIsDialogOpen(open);
	};

	return (
		<main className="pt-5">
			<section className="mx-auto max-w-3xl px-4 pt-10 pb-14 sm:px-6">
				<div className="flex items-center justify-between">
					<Button
						nativeButton={false}
						render={
							<Link href="/events/admin" className="flex items-center">
								<RiArrowLeftSLine size={25} />
								<span>Back to Events</span>
							</Link>
						}
					/>
					<EditEventDialogWrapper />
				</div>

				<h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl">
					{event.name}
				</h1>

				<div className="relative mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-muted">
					<Image
						src={event.imageUrl}
						alt={event.name}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 768px"
					/>
				</div>

				<p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
					{formattedDate}
				</p>

				<article className="mt-7 text-base leading-8 text-foreground/95">
					<div
						className="tiptap max-w-none"
						dangerouslySetInnerHTML={{ __html: sanitizedDetails }}
					/>
				</article>

				<section className="mt-10 rounded-xl border p-6">
					<h2 className="text-xl font-semibold">Admin Details</h2>
					<div className="mt-4 space-y-2 text-sm text-foreground/90">
						<p>
							<span className="font-medium">Event ID:</span> {event.id}
						</p>
						<p>
							<span className="font-medium">Slug:</span> {event.slug}
						</p>
					</div>
				</section>

				<section className="mt-10 space-y-4">
					<div className="flex items-center justify-between">
						<h2 className="text-xl font-semibold">
							Participants ({participants.length})
						</h2>
						<Dialog open={isDialogOpen} onOpenChange={handleDialogOpenChange}>
							<DialogTrigger
								render={<Button type="button">Add Participant</Button>}
							/>
							<CreateParticipantForm onSuccess={handleParticipantAdded} />
						</Dialog>
					</div>
					<ParticipantList participants={participants} />
				</section>
			</section>
		</main>
	);
}
