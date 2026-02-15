import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import EventsList from "@/components/events/events-page/events-list";
import EventsPageHeader from "@/components/events/events-page/events-page-header";
import {
	getEventCountQueryOptions,
	getPaginatedEventsQueryOptions,
} from "@/lib/tanstack-query/query-options";

const PAGE_SIZE = 6;

interface EventsPageProps {
	searchParams: Promise<{
		page?: string;
	}>;
}

export default async function EventsPage({ searchParams }: EventsPageProps) {
	const { page } = await searchParams;
	const parsedPage = Number(page ?? "1");
	const requestedPage = Number.isFinite(parsedPage)
		? Math.floor(parsedPage)
		: 1;
	const queryClient = new QueryClient();

	const totalCount = await queryClient.ensureQueryData(
		getEventCountQueryOptions(),
	);
	const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
	const currentPage = Math.min(Math.max(1, requestedPage), totalPages);

	await queryClient.ensureQueryData(
		getPaginatedEventsQueryOptions({
			page: currentPage,
			pageSize: PAGE_SIZE,
		}),
	);

	await queryClient.ensureQueryData(getEventCountQueryOptions())

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<EventsPageHeader currentPage={currentPage} pageSize={PAGE_SIZE}/>
			<EventsList currentPage={currentPage} pageSize={PAGE_SIZE} />
		</HydrationBoundary>
	);
}
