"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getEventCountQueryOptions } from "@/lib/tanstack-query/query-options";
import { Badge } from "@/components/ui/badge";

interface EventsPageHeaderProps {
	currentPage: number;
	pageSize: number;
}

export default function EventsPageHeader({
	currentPage,
	pageSize,
}: EventsPageHeaderProps) {
	const { data: count } = useSuspenseQuery(getEventCountQueryOptions());
	const { data: totalEventCount } = useSuspenseQuery(getEventCountQueryOptions());
	const totalPages = Math.max(1, Math.ceil(count / pageSize));

	return (
		<section className="border-b border-border/60 bg-background/90">
			<div className="mx-auto max-w-6xl px-6 py-14">

				<h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
					Events
				</h1>
				<Badge>
					{totalEventCount} event{totalEventCount === 1 ? "" : "s"} total
				</Badge>

				<p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
					Explore workshops, hackathons, and community sessions in chronological
					order.
				</p>

				<p className="mt-5 text-sm text-muted-foreground">
					{count} total event{count === 1 ? "" : "s"} • Page {currentPage} of{" "}
					{totalPages}
				</p>
			</div>
		</section>
	);
}
