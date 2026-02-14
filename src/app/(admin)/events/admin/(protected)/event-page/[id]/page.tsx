import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import EventPage from "@/components/admin/event-page";
import {
	getEventQueryOptions,
	getParticipantsByEventIdQueryOptions,
} from "@/lib/tanstack-query/query-options";

export default async function EventPageWrapper({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const queryClient = new QueryClient();

	await queryClient.ensureQueryData(getEventQueryOptions(id));
	await queryClient.ensureQueryData(getParticipantsByEventIdQueryOptions(id));

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<EventPage  />
		</HydrationBoundary>
	);
}
