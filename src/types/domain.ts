import { z } from "zod";
import { FirestoreTimestamp } from "@/lib/helpers/firestore-timestamp";

export const EventRecordSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  details: z.string().min(1),
  imageUrl: z.string().min(1),
  date: FirestoreTimestamp,
});

export const ParticipantRecordSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  email: z.email(),
});

export type EventRecord = z.infer<typeof EventRecordSchema>;
export type ParticipantRecord = z.infer<typeof ParticipantRecordSchema>;
