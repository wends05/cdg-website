import type { Timestamp } from "firebase/firestore";
import z from "zod";

export const FirestoreTimestamp = z.transform((data: Timestamp) => {
  return new Date(data.seconds * 1000);
});
