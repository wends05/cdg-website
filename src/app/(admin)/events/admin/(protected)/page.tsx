import Link from "next/link";
import { getEvents } from "@/actions/events";
import EventsList from "@/components/admin/events-list";
import { Button } from "@/components/ui/button";

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
