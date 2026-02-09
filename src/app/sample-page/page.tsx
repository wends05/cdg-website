import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { EventRecordSchema, ParticipantRecordSchema } from "@/types/domain";

/**
 * Sample page for fetching the events data
 */
export default async function Page() {
	const { docs: events } = await getDocs(query(collection(db, "events")));
	const parsedEvents = events
		.map((doc) => {
			const rawEvent = { id: doc.id, ...doc.data() };
			const parsed = EventRecordSchema.safeParse(rawEvent);

			if (!parsed.success) {
				console.warn("Invalid event document skipped", {
					id: doc.id,
					issues: parsed.error.issues,
				});
				return null;
			}

			return parsed.data;
		})
		.filter((event): event is NonNullable<typeof event> => event !== null);

	return (
		<div>
			{parsedEvents.map((event) => (
				<div key={event.id}>
					<pre>{JSON.stringify(event, null, 2)}</pre>
					<ParticipantFetcher eventID={event.id} />
				</div>
			))}
		</div>
	);
}

const ParticipantFetcher = async ({ eventID }: { eventID: string }) => {
	const { docs: participants } = await getDocs(
		query(collection(db, "events", eventID, "participants")),
	);
	const parsedParticipants = participants
		.map((doc) => {
			const rawParticipant = { id: doc.id, eventSlug: eventID, ...doc.data() };
			const parsed = ParticipantRecordSchema.safeParse(rawParticipant);

		if (!parsed.success) {
			console.warn("Invalid participant document skipped", {
				id: doc.id,
				eventID,
				issues: parsed.error.issues,
			});
			return [];
		}

		return parsed.data;
	});

	return (
		<div>
			<pre>{`Participants for event ${eventID}:`}</pre>
			<pre>{JSON.stringify(parsedParticipants, null, 2)}</pre>
		</div>
	);
};
