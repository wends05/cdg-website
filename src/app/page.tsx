import EventsPreview from "@/components/home/events-preview";
import Footer from "@/components/ui/footer";
import Hero from "@/components/home/hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />

      <section className="py-16 bg-white dark:bg-zinc-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join CDG Today
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Become part of our growing community of developers, designers, and
              tech enthusiasts.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/apply"
              className="inline-block rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      </section>

      <EventsPreview />
      <Footer />
    </div>
  );
}
