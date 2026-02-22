"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { formatDate } from "date-fns";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getPaginatedEventsQueryOptions } from "@/lib/tanstack-query/query-options";

export default function FeaturedEvents() {
	const { data: events } = useSuspenseQuery(
		getPaginatedEventsQueryOptions({
			page: 1,
			pageSize: 3,
		}),
	);

	if (!events || events.length === 0) {
		return null;
	}

	const topEvents = events.slice(0, 3);

	return (
		<section className="relative overflow-hidden bg-background py-16 sm:py-24">
			{/* Background SVG */}
			<div className="absolute inset-0 z-0 bg-[url('/featured-events-bg.svg')] bg-cover bg-center bg-no-repeat" />

			<div className="relative z-10 mx-auto max-w-6xl px-6">
				<div className="text-center">
					<h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-500 inline-block pb-1">
						Event Highlights
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-foreground">
						Discover our latest events, workshops, and community gatherings
						designed to inspire creativity, innovation, and collaboration.
					</p>
				</div>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
					{topEvents.map((event) => (
						<Link
							key={event.id ?? event.slug}
							href={`/events/${event.slug}`}
							className="group block w-full max-w-[320px] lg:max-w-none overflow-hidden rounded-2xl border border-border bg-muted transition-all hover:-translate-y-1 hover:shadow-xl aspect-square relative"
						>
							<Image
								src={event.imageUrl}
								alt={event.name}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
								className="object-cover transition duration-500 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6 text-white">
								<h3 className="text-xl font-bold mb-2 leading-tight">
									{event.name}
								</h3>
								<div className="flex flex-col gap-1.5 text-sm font-medium text-white/90">
									<div className="flex items-center gap-2">
										<Calendar className="h-4 w-4" />
										<span>{formatDate(event.date, "MMMM d, yyyy")}</span>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
