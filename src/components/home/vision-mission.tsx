import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function VisionMission() {
	return (
		<section className="reveal-up bg-[#dfe1e8] px-4 py-14 md:px-8">
			<div className="mx-auto max-w-7xl">
				<Card className="relative overflow-hidden border-none bg-[#f4f6fb] py-0">
					<div className="float-shape pointer-events-none absolute -left-8 -top-10 h-44 w-44 rounded-full border-[10px] border-[#8fb2f3] opacity-95" />
					<div className="float-shape pointer-events-none absolute -right-10 -top-6 h-44 w-44 rounded-full border-[10px] border-[#8fb2f3]" />
					<div className="float-shape pointer-events-none absolute -right-3 top-4 h-24 w-24 rounded-full border-[10px] border-[#8fb2f3]" />
					<div className="pointer-events-none absolute left-12 top-12 h-4 w-4 rotate-45 bg-[#8fb2f3]" />
					<div className="pointer-events-none absolute left-20 top-28 h-5 w-5 rotate-45 bg-[#8fb2f3]" />

					<CardContent className="stagger-parent relative grid gap-8 px-8 py-12 md:grid-cols-[1fr_auto_1fr] md:items-start md:px-14">
						<article className="stagger-item">
							<h3 className="mb-4 text-5xl font-semibold text-[#2f71f0]">
								Vision
							</h3>
							<div className="flex items-start gap-4">
								<div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#2f71f0] text-[#2f71f0]">
									<svg
										viewBox="0 0 24 24"
										className="h-6 w-6"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.9"
									>
										<path d="M9 18h6" />
										<path d="M10 21h4" />
										<path d="M12 3a6 6 0 0 0-3.6 10.8c.9.68 1.6 1.5 1.6 2.2h4c0-.7.7-1.52 1.6-2.2A6 6 0 0 0 12 3Z" />
									</svg>
								</div>
								<p className="max-w-xl text-base leading-relaxed text-zinc-600">
									The Centralian Developer Group (CDG) envisions itself as a
									dynamic community of developers, holistically formed as men
									and women for and with others, driven by a passion for solving
									community challenges through technology, innovation, and
									collaboration.
								</p>
							</div>
						</article>

						<Separator
							orientation="vertical"
							className="hidden bg-zinc-300 md:block"
						/>

						<article className="stagger-item">
							<h3 className="mb-4 text-5xl font-semibold text-[#2f71f0]">
								Mission
							</h3>
							<div className="flex items-start gap-4">
								<div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#2f71f0] text-[#2f71f0]">
									<svg
										viewBox="0 0 24 24"
										className="h-6 w-6"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.9"
									>
										<circle cx="12" cy="12" r="7" />
										<circle cx="12" cy="12" r="3" />
										<path d="M21 3l-7 7" />
										<path d="M17 3h4v4" />
									</svg>
								</div>
								<p className="max-w-xl text-base leading-relaxed text-zinc-600">
									The mission of the Centralian Developer Group (CDG) is to
									empower students through accessible education in technology
									and programming, inspire innovation and problem-solving
									mindset, and nurture the creation of timely and relevant
									technological solutions that contribute to the growth and
									sustainability of the community.
								</p>
							</div>
						</article>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
