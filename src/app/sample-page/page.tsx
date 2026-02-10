import { getEvents, getParticipantsByEventId } from "@/actions/events";

/**
 * Sample page for fetching the events data
 */
export default async function Page() {
	const events = await getEvents();

	return (
		<div>
			{events.map((event) => {
				if (!event.id) {
					return null;
				}

				return (
					<div key={event.id}>
						<pre>{JSON.stringify(event, null, 2)}</pre>
						<ParticipantFetcher eventId={event.id} />
					</div>
				);
			})}
		</div>
	);
}

const ParticipantFetcher = async ({ eventId }: { eventId: string }) => {
	const participants = await getParticipantsByEventId(eventId);

	return (
		<div>
			<pre>{`Participants for event ${eventId}:`}</pre>
			<pre>{JSON.stringify(participants, null, 2)}</pre>
		</div>
	);
};
