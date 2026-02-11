import Link from "next/link";
import { events } from "@/lib/events";
import { EventCard } from "@/components/ui/event-card";

export default function EventsPreview() {
  const previewEvents = events.slice(0, 3);

  return (
    <section id="events" className="py-16 bg-zinc-50 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Join our workshops, hackathons, and tech talks to enhance your
            skills and connect with fellow developers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View All Events
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
