import { RiArrowLeftSLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { sanitizeHtml } from "@/lib/sanitize-html";
import type { EventRecord } from "@/types/domain";
import GetCertificate from "./get-certificate";

interface EventPageProps {
	event: EventRecord;
}

export default function EventPage({ event }: EventPageProps) {
	const formattedDate = new Intl.DateTimeFormat("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	}).format(event.date);

	const sanitizedDetails = sanitizeHtml(event.details);

	return (
		<div className="pt-5">
			<section className="mx-auto max-w-3xl px-4 pt-10 pb-14 sm:px-6">
				<Link href={"/events"} className="flex items-center pb-5">
					<RiArrowLeftSLine size={25} /> <span>Back</span>
				</Link>
				<h1 className="text-3xl leading-tight font-bold text-foreground sm:text-4xl">
					{event.name}
				</h1>

				<div className="relative mt-6 aspect-square w-full overflow-hidden rounded-2xl border border-border/70 bg-muted">
					<Image
						src={event.imageUrl}
						alt={event.name}
						fill
						priority
						className="object-cover"
						sizes="(max-width: 768px) 100vw, 768px"
					/>
				</div>

				<p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground uppercase">
					{formattedDate}
				</p>

				<article className="mt-7 text-base leading-8 text-foreground/95">
					<div
						className="tiptap max-w-none"
						dangerouslySetInnerHTML={{ __html: sanitizedDetails }}
					/>
				</article>
			</section>

			<GetCertificate eventName={event.name} eventSlug={event.slug} />
		</div>
	);
}
