import type { Timestamp } from "firebase/firestore";
import z from "zod";

export const FirestoreTimestamp = z.custom<Date | Timestamp>(
	(data) => {
		return data instanceof Date || (typeof data === "object" && data !== null && "seconds" in data);
	},
	{
		message: "Expected a Date or Firestore Timestamp",
	},
).transform((data) => {
	if (data instanceof Date) return data;
	return new Date(data.seconds * 1000);
});
