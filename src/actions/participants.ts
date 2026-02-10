"use server";

import {
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
	ParticipantRecordSchema,
} from "@/types/domain";
import { getEventBySlug } from "./events";

// READ all participants for an event
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

// READ one participant by ID
export async function getParticipant(id: string, eventId: string) {
	const ref = doc(db, "events", eventId, "participants", id);
	const snapshot = await getDoc(ref);
	if (!snapshot.exists()) throw new Error(`Participant ${id} not found`);
	return ParticipantRecordSchema.parse({
		id: snapshot.id,
		...snapshot.data(),
	});
}

// READ participant by email
export async function getParticipantByEmail(email: string, eventId: string) {
	const q = query(
		collection(db, "events", eventId, "participants"),
		where("email", "==", email),
	);
	const snapshot = await getDocs(q);
	if (snapshot.empty)
		throw new Error(`No participant found with email ${email}`);
	const participantDoc = snapshot.docs[0];
	return ParticipantRecordSchema.parse({
		id: participantDoc.id,
		...participantDoc.data(),
	});
}

// UPDATE participant
export async function updateParticipant(
	id: string,
	data: unknown,
	eventId: string,
) {
	const parsed = ParticipantRecordSchema.omit({ id: true })
		.partial()
		.parse(data);
	await updateDoc(doc(db, "events", eventId, "participants", id), parsed);
	return { id, ...parsed };
}

// DELETE participant
export async function deleteParticipant(id: string, eventId: string) {
	await deleteDoc(doc(db, "events", eventId, "participants", id));
	return { id };
}

// ADD participant to event and create if not exist
export async function addParticipantToEvent(
	email: string,
	name: string,
	eventId: string,
) {
	const q = query(
		collection(db, "events", eventId, "participants"),
		where("email", "==", email),
	);
	const snapshot = await getDocs(q);

	if (!snapshot.empty) {
    // Participant already exists, return existing participant
		const existingDoc = snapshot.docs[0];
		return ParticipantRecordSchema.parse({
			id: existingDoc.id,
			...existingDoc.data(),
		});
	}

	const participantRef = doc(collection(db, "events", eventId, "participants"));
	const parsed = ParticipantRecordSchema.omit({ id: true }).parse({
		name,
		email,
		joinedAt: new Date(),
	});

	await setDoc(participantRef, parsed);
	return { id: participantRef.id, ...parsed };
}

// GET specific participant by email + eventId
export async function getSpecificParticipantByEmailAndEventId(
	email: string,
	eventId: string,
) {
	return getParticipantByEmail(email, eventId);
}

// GET specific participant by email + eventSlug
export async function getSpecificParticipantByEmailAndEventSlug(
	email: string,
	eventSlug: string,
) {
	const event = await getEventBySlug(eventSlug);
	if (!event || !event.id) {
		throw new Error(`Event with slug ${eventSlug} not found`);
	}

	return getSpecificParticipantByEmailAndEventId(email, event.id);
}
