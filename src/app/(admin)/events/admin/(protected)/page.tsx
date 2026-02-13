import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";
import EventsList from "@/components/admin/events-list";
import { Button } from "@/components/ui/button";
import { getEventsQueryOptions } from "@/lib/tanstack-query/query-options";

export default async function AdminPage() {
	const queryClient = new QueryClient();

	await queryClient.ensureQueryData(getEventsQueryOptions());

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<main className="p-10 space-y-5">
				<div className="flex items-center justify-between">
					<h2>Events List</h2>
					<Button
						nativeButton={false}
						render={<Link href={"/events/admin/create"}>Create Event</Link>}
					/>
				</div>
				<div>
					<EventsList />
				</div>
			</main>
		</HydrationBoundary>
	);
}
