import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { EventRecord } from "@/types/domain";
import { CircleShape } from "../shapes/circle-shape";
import { SquareShape } from "../shapes/square-shape";
import { TriangleShape } from "../shapes/triangle-shape";

interface EventsPreviewProps {
	events?: EventRecord[];
}

export default function EventsPreview({ events = [] }: EventsPreviewProps) {
	return (
		<section className="reveal-up relative isolate lg:min-h-203.25 w-full overflow-hidden bg-[#2f71f0] flex items-center">
			<Image
				src="/assets/event.svg"
				alt=""
				fill
				priority
				className="pointer-events-none object-cover object-center"
			/>

			<div
				aria-hidden="true"
				className="absolute inset-y-0 left-0 w-full md:w-[62%]"
				style={{
					background:
						"linear-gradient(90deg, #3186FF 40%, rgba(27, 56, 204, 0) 100%)",
				}}
			/>

			<div className="hidden lg:block">
				<SquareShape
					aria-hidden="true"
					className="absolute -left-24 -top-20 h-56 w-56 text-white"
				/>
				<CircleShape
					aria-hidden="true"
					className="absolute -bottom-48 left-[32%] h-88 w-88 rounded-full text-white"
				/>
				<CircleShape
					aria-hidden="true"
					className="absolute top-4 h-32 left-[40%] text-white"
				/>
				<TriangleShape
					aria-hidden="true"
					className="absolute bottom-0 -left-10 h-32 w-32 text-white"
				/>
			</div>

			<div className="relative z-10 mx-auto w-full flex h-full lg:max-w-8xl flex-col px-12 lg:px-32 py-16">
				<div className="space-y-6 flex items-start flex-col  w-[80%]">
					<h2 className="font-display text-3xl lg:text-6xl font-medium leading-[1.05] text-primary-foreground md:text-[64px]">
						See What We&apos;ve
						<br />
						Built Together
					</h2>
					<p className="max-w-md leading-relaxed text-primary-foreground/90 lg:text-xl text-sm">
						Discover the projects, events, and experiences created through
						teamwork, passion, and dedication &mdash; all driven by students,
						for students.
					</p>
					<Link
						href="/events"
						aria-label={
							events.length > 0 ? `View ${events.length} events` : "View events"
						}
						className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3 text-lg font-semibold text-primary transition-all hover:bg-primary-foreground/90 h-12.5"
					>
						View Events
						<ChevronRight className="h-5 w-5" />
					</Link>
				</div>
			</div>
		</section>
	);
}
