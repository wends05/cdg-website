import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
	type EventRecord,
	EventRecordReadSchema,
	ParticipantRecordSchema,
} from "@/types/domain";

// GET ALL EVENTS
export async function getEvents() {
	const snapshot = await getDocs(collection(db, "events"));
	return snapshot.docs
		.map((snapshotDoc) => {
			const parsed = EventRecordReadSchema.safeParse({
				id: snapshotDoc.id,
				...snapshotDoc.data(),
			});

			if (!parsed.success) {
				return null;
			}

			return parsed.data;
		})
		.filter((event): event is EventRecord => event !== null);
}

// GET ONE EVENT (by ID)
export async function getEvent(id: string) {
	const ref = doc(db, "events", id);
	const snapshot = await getDoc(ref);

	if (!snapshot.exists()) {
		throw new Error(`Event with ID ${id} not found`);
	}

	return EventRecordReadSchema.parse({
		id: snapshot.id,
		...snapshot.data(),
	});
}

// GET ONE EVENT (by slug)
export async function getEventBySlug(slug: string) {
	const q = query(collection(db, "events"), where("slug", "==", slug));
	const snapshot = await getDocs(q);

	if (snapshot.empty) {
		throw new Error(`No event found with slug ${slug}`);
	}

	const eventDoc = snapshot.docs[0];
	return EventRecordReadSchema.parse({ id: eventDoc.id, ...eventDoc.data() });
}

// GET PARTICIPANTS FOR EVENT (by event ID)
export async function getParticipantsByEventId(eventId: string) {
	const q = query(collection(db, "events", eventId, "participants"));
	const snapshot = await getDocs(q);

	return snapshot.docs.map((participantDoc) =>
		ParticipantRecordSchema.parse({
			id: participantDoc.id,
			...participantDoc.data(),
		}),
	);
}

// GET PARTICIPANTS FOR EVENT (by event slug)
export async function getParticipantsByEventSlug(eventSlug: string) {
	const event = await getEventBySlug(eventSlug);

	if (!event?.id) {
		throw new Error(`Event with slug ${eventSlug} not found`);
	}

	return getParticipantsByEventId(event.id);
}
