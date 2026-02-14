import Link from "next/link";

export default function EventsHighlight() {
	return (
		<section className="reveal-up bg-[#dfe1e8] px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl overflow-hidden rounded-xl bg-linear-to-r from-[#2f80ff] to-[#1b38cc] text-white">
				<div className="grid items-stretch md:grid-cols-[1fr_1.2fr]">
					<div className="reveal-left relative p-8 md:p-10">
						<div className="float-shape pointer-events-none absolute -left-6 -top-6 h-16 w-16 rotate-45 border-4 border-white/95" />
						<div className="float-shape pointer-events-none absolute -right-8 -bottom-8 h-36 w-36 rounded-full border-8 border-white/95" />
						<h3 className="text-5xl font-semibold">
							See What We&apos;ve Built Together
						</h3>
						<p className="mt-4 max-w-md text-base text-white/90">
							Discover workshops, events, and collaborative projects that
							showcase our community&apos;s growth and impact.
						</p>
						<Link
							href="/events"
							className="mt-6 inline-flex rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#1b38cc] transition hover:bg-white/90"
						>
							Explore Events
						</Link>
					</div>

					<div className="reveal-right min-h-64 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" />
				</div>
			</div>
		</section>
	);
}
