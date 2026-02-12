import { notFound } from "next/navigation";
import EventPage from "@/components/events/event-page";
import { getEventBySlug } from "@/queries/events";

interface EventRoutePageProps {
	params: Promise<{ slug: string }>;
}

export default async function EventRoutePage({ params }: EventRoutePageProps) {
	const { slug } = await params;
	const event = await getEventBySlug(slug).catch(() => null);

	if (!event) {
		notFound();
	}

	return <EventPage event={event} />;
}
