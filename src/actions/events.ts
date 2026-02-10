"use server";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  type EventRecord,
  EventRecordSchema,
  ParticipantRecordSchema,
} from "@/types/domain";

// CREATE ONE
export async function createEvent(data: unknown) {
  const parsed = EventRecordSchema.omit({ id: true }).parse(data);
  const docRef = await addDoc(collection(db, "events"), parsed);
  return { id: docRef.id, ...parsed };
}

// READ (all events)
export async function getEvents() {
  const snapshot = await getDocs(collection(db, "events"));
  return snapshot.docs
    .map((snapshotDoc) => {
      const parsed = EventRecordSchema.safeParse({
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

// READ (one event by ID)
export async function getEvent(id: string) {
  const ref = doc(db, "events", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    throw new Error(`Event with ID ${id} not found`);
  }

  // validate with Zod to ensure schema consistency
  const parsed = EventRecordSchema.parse({
    id: snapshot.id,
    ...snapshot.data(),
  });
  return parsed;
}

// UPDATE (by ID)
export async function updateEvent(id: string, data: unknown) {
  const parsed = EventRecordSchema.omit({ id: true }).partial().parse(data);
  await updateDoc(doc(db, "events", id), parsed);
  return { id, ...parsed };
}

// DELETE (by ID)
export async function deleteEvent(id: string) {
  await deleteDoc(doc(db, "events", id));
  return { id };
}

/* Specialized Actions */

export async function getEventBySlug(slug: string) {
  const q = query(collection(db, "events"), where("slug", "==", slug));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    throw new Error(`No event found with slug ${slug}`);
  }

  // Assuming slug is unique, return the first match
  const doc = snapshot.docs[0];
  const parsed = EventRecordSchema.parse({ id: doc.id, ...doc.data() });
  return parsed;
}

// GET participants for an event by eventId
export async function getParticipantsByEventId(eventId: string) {
  const q = query(collection(db, "events", eventId, "participants"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) =>
    ParticipantRecordSchema.parse({ id: doc.id, ...doc.data() }),
  );
}

// GET participants for an event by eventSlug
export async function getParticipantsByEventSlug(eventSlug: string) {
  const event = await getEventBySlug(eventSlug);
  if (!event || !event.id) {
    throw new Error(`Event with slug ${eventSlug} not found`);
  }
  return getParticipantsByEventId(event.id);
}
