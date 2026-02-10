'use server'

import { db } from '@/lib/firebase'
import { ParticipantRecordSchema, EventParticipantSchema } from '@/types/domain'
import {
  collection,
  doc,
  addDoc,
  getDocs,
  getDoc,
  query,
  where,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore'




/* PARTICIPANTS SCHEMA */

// CREATE participant (standalone)
export async function createParticipant(data: unknown) {
  const parsed = ParticipantRecordSchema.omit({ id: true }).parse(data)
  const docRef = await addDoc(collection(db, 'participants'), parsed)
  return { id: docRef.id, ...parsed }
}

// READ all participants
export async function getParticipants() {
  const snapshot = await getDocs(collection(db, 'participants'))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// READ one participant by ID
export async function getParticipant(id: string) {
  const ref = doc(db, 'participants', id)
  const snapshot = await getDoc(ref)
  if (!snapshot.exists()) throw new Error(`Participant ${id} not found`)
  return ParticipantRecordSchema.parse({ id: snapshot.id, ...snapshot.data() })
}

// READ participant by email
export async function getParticipantByEmail(email: string) {
  const q = query(collection(db, 'participants'), where('email', '==', email))
  const snapshot = await getDocs(q)
  if (snapshot.empty)
    throw new Error(`No participant found with email ${email}`)
  const doc = snapshot.docs[0]
  return ParticipantRecordSchema.parse({ id: doc.id, ...doc.data() })
}

// UPDATE participant
export async function updateParticipant(id: string, data: unknown) {
  const parsed = ParticipantRecordSchema.partial().parse(data)
  await updateDoc(doc(db, 'participants', id), parsed)
  return { id, ...parsed }
}

// DELETE participant
export async function deleteParticipant(id: string) {
  await deleteDoc(doc(db, 'participants', id))
  return { id }
}

/* EVENT PARTICIPANTS (JOIN COLLECTION) SCHEMA*/

// ADD participant to event and create if not exist
export async function addParticipantToEvent(
  email: string,
  name: string,
  eventId: string,
  eventSlug: string,
) {
  // Check if participant exists
  const q = query(collection(db, 'participants'), where('email', '==', email))
  const snapshot = await getDocs(q)

  let participantId: string

  if (snapshot.empty) {
    // Create new participant
    const parsed = ParticipantRecordSchema.omit({ id: true }).parse({
      name,
      email,
    })
    const docRef = await addDoc(collection(db, 'participants'), parsed)
    participantId = docRef.id
  } else {
    participantId = snapshot.docs[0].id
  }

  // Create join record
  const joinParsed = EventParticipantSchema.omit({ id: true }).parse({
    eventId,
    eventslug: eventSlug,
    participantId,
    joinedAt: new Date(), // or serverTimestamp()
  })
  const joinRef = await addDoc(collection(db, 'eventParticipants'), joinParsed)
  return { id: joinRef.id, ...joinParsed }
}


// GET specific participant by email + eventId
export async function getSpecificParticipantByEmailAndEventId(
  email: string,
  eventId: string,
) {
  const participant = await getParticipantByEmail(email)
  const q = query(
    collection(db, 'eventParticipants'),
    where('eventId', '==', eventId),
    where('participantId', '==', participant.id),
  )
  const snapshot = await getDocs(q)
  if (snapshot.empty)
    throw new Error(`No join record for ${email} in event ${eventId}`)
  const doc = snapshot.docs[0]
  return EventParticipantSchema.parse({ id: doc.id, ...doc.data() })
}

// GET specific participant by email + eventSlug
export async function getSpecificParticipantByEmailAndEventSlug(
  email: string,
  eventSlug: string,
) {
  const participant = await getParticipantByEmail(email)
  const q = query(
    collection(db, 'eventParticipants'),
    where('eventslug', '==', eventSlug),
    where('participantId', '==', participant.id),
  )
  const snapshot = await getDocs(q)
  if (snapshot.empty)
    throw new Error(`No join record for ${email} in event ${eventSlug}`)
  const doc = snapshot.docs[0]
  return EventParticipantSchema.parse({ id: doc.id, ...doc.data() })
}
