import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

/**
 * Sample page for fetching the events data
 */
export default async function Page() {
	const events = await getDocs(query(collection(db, "events")));

	return (
		<div>
			{events.docs.map((doc) => (
				<div key={doc.id}>{JSON.stringify(doc.data())}</div>
			))}
		</div>
	);
}
