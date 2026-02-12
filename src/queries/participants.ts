import {
	collection,
	doc,
	getDoc,
	getDocs,
	query,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getEventBySlug } from "@/queries/events";
import { ParticipantRecordSchema } from "@/types/domain";

// GET PARTICIPANTS FOR EVENT (by event ID)
export async function getParticipants(eventId: string) {
	const snapshot = await getDocs(
		collection(db, "events", eventId, "participants"),
	);

	return snapshot.docs.map((participantDoc) =>
		ParticipantRecordSchema.parse({
			id: participantDoc.id,
			...participantDoc.data(),
		}),
	);
}

// GET PARTICIPANTS FOR EVENT (by event slug)
export async function getParticipant(id: string, eventId: string) {
	const ref = doc(db, "events", eventId, "participants", id);
	const snapshot = await getDoc(ref);

	if (!snapshot.exists()) {
		throw new Error(`Participant ${id} not found`);
	}

	return ParticipantRecordSchema.parse({
		id: snapshot.id,
		...snapshot.data(),
	});
}

// GET PARTICIPANT BY EMAIL FOR EVENT (by event ID)
export async function getParticipantByEmail(email: string, eventId: string) {
	const q = query(
		collection(db, "events", eventId, "participants"),
		where("email", "==", email),
	);
	const snapshot = await getDocs(q);

	if (snapshot.empty) {
		throw new Error(`No participant found with email ${email}`);
	}

	const participantDoc = snapshot.docs[0];
	return ParticipantRecordSchema.parse({
		id: participantDoc.id,
		...participantDoc.data(),
	});
}

// GET PARTICIPANT BY EMAIL FOR EVENT (by event slug)
export async function getSpecificParticipantByEmailAndEventId(
	email: string,
	eventId: string,
) {
	return getParticipantByEmail(email, eventId);
}

// GET PARTICIPANT BY EMAIL FOR EVENT (by event slug)
export async function getSpecificParticipantByEmailAndEventSlug(
	email: string,
	eventSlug: string,
) {
	const event = await getEventBySlug(eventSlug);

	if (!event?.id) {
		throw new Error(`Event with slug ${eventSlug} not found`);
	}

	return getSpecificParticipantByEmailAndEventId(email, event.id);
}
