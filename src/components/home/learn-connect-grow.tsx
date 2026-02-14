import { Card, CardContent } from "@/components/ui/card";

const items = [
	{
		title: "Learn",
		text: "Learn through hands-on workshops, events, talks, and practical tech sessions.",
	},
	{
		title: "Connect",
		text: "Meet peers and mentors, collaborate on projects, and grow your developer network.",
	},
	{
		title: "Grow",
		text: "Apply new skills in real activities and contribute meaningful solutions to your community.",
	},
];

export default function LearnConnectGrow() {
	return (
		<section className="reveal-up bg-[#f2f3f7] px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl">
				<Card className="border-none bg-transparent py-0 shadow-none ring-0">
					<CardContent className="px-2 py-0 md:px-4">
						<h2 className="reveal-left text-5xl font-semibold text-[#2f71f0]">
							Join us as We Learn, Connect, &amp; Grow
						</h2>
						<div className="stagger-parent mt-8 grid gap-6 md:grid-cols-3">
							{items.map((item, index) => (
								<article
									key={item.title}
									className="stagger-item rounded-lg bg-white/70 p-5 ring-1 ring-zinc-200"
								>
									<div className="mb-3 inline-flex h-6 w-6 items-center justify-center rounded bg-[#e8efff] text-xs font-bold text-[#2f71f0]">
										{index + 1}
									</div>
									<h3 className="text-xl font-semibold text-zinc-900">
										{item.title}
									</h3>
									<p className="mt-2 text-sm leading-relaxed text-zinc-600">
										{item.text}
									</p>
								</article>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
