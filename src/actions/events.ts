'use server'

import { db } from '@/lib/firebase'
import { EventRecordSchema , EventParticipantSchema} from '@/types/domain'
import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc, 
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore'

// CREATE ONE
export async function createEvent(data: unknown) {
  const parsed = EventRecordSchema.omit({ id: true }).parse(data)
  const docRef = await addDoc(collection(db, 'events'), parsed)
  return { id: docRef.id, ...parsed }
}

// READ (all events)
export async function getEvents() {
  const snapshot = await getDocs(collection(db, 'events'))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// READ (one event by ID)
export async function getEvent(id: string) {
  const ref = doc(db, 'events', id)
  const snapshot = await getDoc(ref)

  if (!snapshot.exists()) {
    throw new Error(`Event with ID ${id} not found`)
  }

  // validate with Zod to ensure schema consistency
  const parsed = EventRecordSchema.parse({
    id: snapshot.id,
    ...snapshot.data(),
  })
  return parsed
}

// UPDATE (by ID)
export async function updateEvent(id: string, data: unknown) {
  const parsed = EventRecordSchema.partial().parse(data)
  await updateDoc(doc(db, 'events', id), parsed)
  return { id, ...parsed }
}

// DELETE (by ID)
export async function deleteEvent(id: string) {
  await deleteDoc(doc(db, 'events', id))
  return { id }
}

/* Specialized Actions */


export async function getEventBySlug(slug: string) {
  const q = query(collection(db, 'events'), where('slug', '==', slug))
  const snapshot = await getDocs(q)

  if (snapshot.empty) {
    throw new Error(`No event found with slug ${slug}`)
  }

  // Assuming slug is unique, return the first match
  const doc = snapshot.docs[0]
  const parsed = EventRecordSchema.parse({ id: doc.id, ...doc.data() })
  return parsed
}


// GET participants for an event by eventId
export async function getParticipantsByEventId(eventId: string) {
  const q = query(
    collection(db, 'eventParticipants'),
    where('eventId', '==', eventId),
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) =>
    EventParticipantSchema.parse({ id: doc.id, ...doc.data() }),
  )
}

// GET participants for an event by eventSlug
export async function getParticipantsByEventSlug(eventSlug: string) {
  const q = query(
    collection(db, 'eventParticipants'),
    where('eventslug', '==', eventSlug),
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map((doc) =>
    EventParticipantSchema.parse({ id: doc.id, ...doc.data() }),
  )
}