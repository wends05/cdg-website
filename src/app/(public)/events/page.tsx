import { EventCard } from "@/components/events/event-card";
import { getEvents } from "@/queries/events";

export default async function EventsPage() {
  const events = await getEvents();

  return (
    <main className="relative overflow-hidden bg-linear-to-br from-primary/90 via-secondary to-accent/80 text-foreground">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-y-0 left-0 w-96 bg-white/20 blur-[140px]" />
        <div className="absolute inset-y-0 right-0 w-72 bg-accent/60 blur-[220px]" />
      </div>

      <section className="relative px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-6">
          <h1 className="text-4xl font-black uppercase tracking-[0.4em] text-white/90">
            Events
          </h1>
        </div>
      </section>

      <section className="relative px-6 pb-24 pt-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
