import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { EventRecord, ParticipantRecord } from "@/types/domain";
import ParticipantList from "./participant-list";

interface EventPageProps {
	event: EventRecord;
	participants: ParticipantRecord[];
}

export default function EventPage({ event, participants }: EventPageProps) {
	return (
		<main className="p-10 space-y-8">
			<div className="space-y-4">
				<Link
					href="/events/admin"
					className="inline-flex h-8 items-center rounded-lg border border-border px-3 text-sm font-medium hover:bg-muted"
				>
					Back to Events
				</Link>
				<h1 className="text-2xl font-semibold">{event.name}</h1>
			</div>

			<section className="rounded-md border p-6 space-y-3">
				<h2 className="text-lg font-semibold">Event Information</h2>
				<p>
					<span className="font-medium">ID:</span> {event.id}
				</p>
				<p>
					<span className="font-medium">Slug:</span> {event.slug}
				</p>
				<p>
					<span className="font-medium">Date:</span>{" "}
					{event.date.toLocaleDateString()}
				</p>
				<Image src={event.imageUrl} alt={event.name} width={400} height={400} />
				<div>
					<span className="font-medium">Details:</span>
					<p className="mt-1 text-muted-foreground">{event.details}</p>
				</div>
			</section>

			<section className="space-y-4">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold">
						Participants ({participants.length})
					</h2>
					<Button type="button">Add Participant</Button>
				</div>
				<ParticipantList participants={participants} />
			</section>
		</main>
	);
}
