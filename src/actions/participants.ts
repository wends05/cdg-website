"use server";

import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ParticipantRecordSchema } from "@/types/domain";

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
  });

  await setDoc(participantRef, parsed);

  return { id: participantRef.id, ...parsed };
}
