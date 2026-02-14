export default function CommunityStats() {
	return (
		<section className="reveal-up relative overflow-hidden bg-linear-to-r from-[#317efe] to-[#1b38cc] px-4 py-14 text-white md:px-8">
			<div className="float-shape pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full border-8 border-white/95" />
			<div className="float-shape pointer-events-none absolute right-10 top-6 h-14 w-14 rounded-full border-6 border-white/95" />
			<div className="float-shape pointer-events-none absolute left-1/4 bottom-4 h-14 w-14 rotate-45 border-4 border-white/95" />
			<div className="float-shape pointer-events-none absolute right-1/3 bottom-8 h-14 w-14 rotate-12 border-4 border-white/95" />

			<div className="relative mx-auto max-w-7xl text-center">
				<h2 className="text-5xl font-semibold">
					Building Solutions for the Community
				</h2>
				<p className="mt-2 text-white/80">CDG has grown over the years</p>
				<p
					data-counter="140"
					className="mt-5 text-7xl font-semibold leading-none"
				>
					140+
				</p>
				<p className="mt-1 text-xl text-white/90">Members</p>
			</div>
		</section>
	);
}
