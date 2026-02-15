"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	getEventCountQueryOptions,
	getPaginatedEventsQueryOptions,
} from "@/lib/tanstack-query/query-options";
import NoEventsFound from "./no-events-found";

interface EventsListProps {
	currentPage: number;
	pageSize: number;
}

function getVisiblePages(currentPage: number, totalPages: number) {
	const pages = new Set<number>([
		1,
		totalPages,
		currentPage - 1,
		currentPage,
		currentPage + 1,
	]);
	return [...pages]
		.filter((page) => page >= 1 && page <= totalPages)
		.sort((a, b) => a - b);
}

export default function EventsList({ currentPage, pageSize }: EventsListProps) {
	const { data: count } = useSuspenseQuery(getEventCountQueryOptions());
	const { data: events } = useSuspenseQuery(
		getPaginatedEventsQueryOptions({
			page: currentPage,
			pageSize,
		}),
	);

	if (!events.length) {
		return <NoEventsFound />;
	}

	const totalPages = Math.max(1, Math.ceil(count / pageSize));
	const pages = getVisiblePages(currentPage, totalPages);

	return (
		<section className="mx-auto max-w-6xl px-6 py-12">
			<div className="grid gap-6 px-12 grid-cols-1 sm:grid-cols-2 xl:p-0 xl:grid-cols-3">
				{events.map((event) => (
					<Link
						key={event.id ?? event.slug}
						href={`/events/${event.slug}`}
						className="group block overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg"
					>
						<div className="relative aspect-square overflow-hidden bg-muted">
							<Image
								src={event.imageUrl}
								alt={event.name}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="object-cover transition duration-500 group-hover:scale-105"
							/>
						</div>
						<div className="p-5">
							<p className="text-sm font-medium text-muted-foreground">
								{formatDate(event.date, "MMMM dd, yyyy")}
							</p>
							<h2 className="mt-2 text-lg font-semibold tracking-tight group-hover:text-primary">
								{event.name}
							</h2>
						</div>
					</Link>
				))}
			</div>

			<nav
				className="mt-10 flex flex-wrap items-center justify-center gap-2"
				aria-label="Events pagination"
			>
				<Button
					variant="outline"
					nativeButton={false}
					disabled={currentPage <= 1}
					render={
						<Link
							href={`/events?page=${Math.max(1, currentPage - 1)}`}
							scroll={false}
							tabIndex={currentPage <= 1 ? -1 : 0}
						>
							Previous
						</Link>
					}
				/>

				{pages.map((page) => (
					<Button
						key={page}
						variant={page === currentPage ? "default" : "outline"}
						nativeButton={false}
						render={
							<Link href={`/events?page=${page}`} scroll={false}>
								{page}
							</Link>
						}
					/>
				))}

				<Button
					variant="outline"
					disabled={currentPage >= totalPages}
					nativeButton={false}
					render={
						<Link
							href={`/events?page=${Math.min(totalPages, currentPage + 1)}`}
							scroll={false}
							tabIndex={currentPage >= totalPages ? -1 : 0}
						>
							Next
						</Link>
					}
				/>
			</nav>
		</section>
	);
}
