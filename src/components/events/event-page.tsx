import { RiArrowLeftSLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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

				<article className="mt-7 space-y-4 text-base leading-8 text-foreground/95 [&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary/30 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded-md [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mt-8 [&_h1]:text-3xl [&_h1]:font-bold [&_h2]:mt-7 [&_h2]:text-2xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_li]:my-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-muted [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-6">
					<ReactMarkdown remarkPlugins={[remarkGfm]}>
						{event.details}
					</ReactMarkdown>
				</article>
			</section>

			<GetCertificate eventName={event.name} eventSlug={event.slug} />
		</div>
	);
}
