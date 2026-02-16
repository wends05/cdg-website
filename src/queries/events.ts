import {
	collection,
	doc,
	getCountFromServer,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	startAfter,
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

// GET EVENT COUNT
export async function getEventCount() {
	const snapshot = await getCountFromServer(collection(db, "events"));
	return snapshot.data().count;
}

interface GetEventsPaginatedParams {
	page: number;
	pageSize: number;
}

// GET EVENTS (paginated, newest first)
export async function getEventsPaginated({
	page,
	pageSize,
}: GetEventsPaginatedParams): Promise<EventRecord[]> {
	const safePage = Math.max(1, Math.floor(page));
	const safePageSize = Math.max(1, Math.floor(pageSize));
	const eventsCollection = collection(db, "events");

	// Page 1: just fetch first chunk
	if (safePage === 1) {
		const firstPageQuery = query(
			eventsCollection,
			orderBy("date", "desc"),
			limit(safePageSize),
		);
		const firstPageSnapshot = await getDocs(firstPageQuery);
		return firstPageSnapshot.docs
			.map((doc) => {
				const parsed = EventRecordReadSchema.safeParse({
					id: doc.id,
					...doc.data(),
				});
				return parsed.success ? parsed.data : null;
			})
			.filter((e): e is EventRecord => e !== null);
	}

	// Numbered paging with Firestore requires a cursor.
	// Build cursor by fetching docs up to the previous page boundary.
	const cursorOffset = (safePage - 1) * safePageSize;
	const cursorQuery = query(
		eventsCollection,
		orderBy("date", "desc"),
		limit(cursorOffset),
	);
	const cursorSnapshot = await getDocs(cursorQuery);

	if (cursorSnapshot.docs.length < cursorOffset) {
		return [];
	}

	const cursorDoc = cursorSnapshot.docs[cursorSnapshot.docs.length - 1];

	const pageQuery = query(
		eventsCollection,
		orderBy("date", "desc"),
		startAfter(cursorDoc),
		limit(safePageSize),
	);
	const pageSnapshot = await getDocs(pageQuery);

	return pageSnapshot.docs
		.map((doc) => {
			const parsed = EventRecordReadSchema.safeParse({
				id: doc.id,
				...doc.data(),
			});
			return parsed.success ? parsed.data : null;
		})
		.filter((e): e is EventRecord => e !== null);
}
