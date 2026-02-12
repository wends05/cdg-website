import Link from "next/link";
import EventsList from "@/components/admin/events-list";
import { Button } from "@/components/ui/button";
import { getEvents } from "@/queries/events";

export default async function AdminPage() {
	const events = await getEvents();

	return (
		<main className="p-10 space-y-5">
			<div className="flex items-center justify-between">
				<h2>Events List</h2>

				<Button
					nativeButton={false}
					render={<Link href={"/events/admin/create"}>Create Event</Link>}
				/>
			</div>

			<div>
				<EventsList events={events} />
			</div>
		</main>
	);
}
