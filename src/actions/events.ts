"use server";

import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	updateDoc,
} from "firebase/firestore";
import { UTApi } from "uploadthing/server";
import { db } from "@/lib/firebase";
import { EventRecordSchema } from "@/types/domain";

const utapi = new UTApi();

// CREATE ONE
export async function createEvent(data: unknown) {
	const parsed = EventRecordSchema.omit({ id: true }).parse(data);
	const docRef = await addDoc(collection(db, "events"), parsed);
	return { id: docRef.id, ...parsed };
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

export async function deleteEventImageByKey(imageKey: string) {
	if (!imageKey) return;
	await utapi.deleteFiles(imageKey);
}
