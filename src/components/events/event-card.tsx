"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { EventRecord } from "@/types/domain";
import { formatDate } from "date-fns";

export interface EventCardProps {
	event: EventRecord;
}

export function EventCard({ event }: EventCardProps) {
	const router = useRouter();
	const handleCardClick = () => {
		router.push(`/events/${event.slug}`);
	};
	return (
		<Card className="group flex h-full flex-col border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
			<CardHeader className="p-0">
				<Button
					className="relative h-56 w-full overflow-hidden bg-zinc-950"
					variant={"ghost"}
					onClick={handleCardClick}
				>
					<Image
						src={event.imageUrl}
						alt={event.name}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 48vw, 33vw"
						className="object-cover transition duration-500 group-hover:scale-105"
					/>
				</Button>
			</CardHeader>

			<CardContent className="flex flex-1 flex-col gap-3 px-6 pb-0 pt-6">
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.7}
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span>{formatDate(event.date, "MMMM dd, yyyy")}</span>
				</div>

				<CardTitle className="text-xl font-semibold tracking-tight text-foreground">
					{event.name}
				</CardTitle>
			</CardContent>

			<CardFooter className="flex flex-wrap gap-3 border-t-0 bg-card px-6 py-6 pt-0">
				<Button onClick={handleCardClick}>More</Button>
			</CardFooter>
		</Card>
	);
}
