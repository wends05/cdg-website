import EventsList from "@/components/admin/events-list";
import { getEvents } from "@/queries/events";

export default async function AdminPage() {
	const events = await getEvents();

	return (
		<main className="p-10">
			<h2>Events List</h2>
			<div>
				<EventsList events={events} />
			</div>
		</main>
	);
}
