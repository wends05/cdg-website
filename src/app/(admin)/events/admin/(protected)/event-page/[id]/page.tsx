import { getEvent, getParticipantsByEventId } from "@/actions/events";
import EventPage from "@/components/admin/event-page";

export default async function EventPageWrapper({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const eventData = await getEvent(id);
	const participants = await getParticipantsByEventId(id);
	console.log(participants)

	return <EventPage event={eventData} participants={participants} />;
}
