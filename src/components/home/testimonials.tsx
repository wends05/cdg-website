import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
	{
		quote:
			"CDG helped me build confidence and practical skills through workshops and real projects.",
		name: "Full Name",
		role: "CDG Alumni",
	},
	{
		quote:
			"I learned to collaborate with developers from different tracks and improved both coding and communication.",
		name: "Full Name",
		role: "CDG Member",
	},
	{
		quote:
			"The organization creates opportunities that are inclusive, hands-on, and valuable for student growth.",
		name: "Full Name",
		role: "CDG Faculty",
	},
];

export default function TestimonialsSection() {
	return (
		<section className="reveal-up bg-[#dfe1e8] px-4 py-14 md:px-8">
			<div className="mx-auto max-w-7xl">
				<h2 className="reveal-left text-center text-5xl font-semibold text-[#2f71f0]">
					Testimonials
				</h2>
				<div className="stagger-parent mt-10 grid gap-6 md:grid-cols-3">
					{testimonials.map((item, i) => (
						<Card
							key={item.role}
							className="stagger-item relative border-none bg-white/80 py-0 shadow-lg ring-1 ring-zinc-200"
							style={{
								backgroundImage:
									i === 1
										? "radial-gradient(circle at 90% 5%, rgba(250,204,21,.55), transparent 33%), radial-gradient(circle at 10% 90%, rgba(59,130,246,.55), transparent 30%)"
										: "radial-gradient(circle at 12% 6%, rgba(59,130,246,.5), transparent 28%), radial-gradient(circle at 88% 92%, rgba(250,204,21,.65), transparent 30%)",
							}}
						>
							<CardContent className="space-y-4 px-6 py-8">
								<p className="text-4xl font-semibold leading-none text-[#2f71f0]">
									“
								</p>
								<p className="text-sm leading-relaxed text-zinc-700">
									{item.quote}
								</p>
								<div className="pt-3">
									<p className="text-sm font-semibold text-zinc-900">
										{item.name}
									</p>
									<p className="text-xs text-zinc-600">{item.role}</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
