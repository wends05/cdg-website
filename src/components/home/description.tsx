import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DescriptionSection() {
	return (
		<section className="reveal-up px-4 py-12 md:px-8">
			<div className="mx-auto max-w-7xl">
				<Card className="border-none bg-transparent py-0 shadow-none ring-0">
					<CardContent className="grid items-center gap-8 px-2 py-0 md:grid-cols-[1fr_1.35fr] md:px-4">
						<div className="reveal-left">
							<h2 className="text-5xl font-semibold leading-tight text-zinc-700">
								Together we,
								<span className="block text-[#2f71f0]">create</span>
							</h2>
							<p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 md:text-base">
								The Centralian Developer Group is a collaborative community of
								active coders, designers, and tech enthusiasts from Central
								Philippine University, willing to learn, build, and innovate
								together.
							</p>
							<Button className="mt-6 rounded-full px-5" size="sm">
								See More {">"}
							</Button>
						</div>

						<div className="reveal-right relative">
							<div className="aspect-video rounded-md border border-zinc-400 bg-[#efefef]" />
							<div className="pointer-events-none absolute inset-0">
								<div className="absolute left-0 top-0 h-px w-full bg-zinc-400" />
								<div className="absolute left-0 top-0 h-full w-px bg-zinc-400" />
								<div className="absolute bottom-0 right-0 h-px w-full bg-zinc-400" />
								<div className="absolute bottom-0 right-0 h-full w-px bg-zinc-400" />
								<div className="absolute left-0 top-0 h-full w-full border-b border-r border-transparent">
									<svg viewBox="0 0 100 100" className="h-full w-full">
										<title>CDG Logo</title>

										<line
											x1="0"
											y1="0"
											x2="100"
											y2="100"
											stroke="#8f8f8f"
											strokeWidth="0.3"
										/>
										<line
											x1="100"
											y1="0"
											x2="0"
											y2="100"
											stroke="#8f8f8f"
											strokeWidth="0.3"
										/>
									</svg>
								</div>
							</div>
							{/* TODO: Add video player */}
							<button
								type="button"
								className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-400 bg-white/90 text-zinc-500"
								aria-label="Play intro video"
							>
								<svg
									viewBox="0 0 24 24"
									className="ml-0.5 h-6 w-6"
									fill="currentColor"
								>
									<title>Play Intro Video</title>
									<path d="M8 6.2v11.6L17 12 8 6.2z" />
								</svg>
							</button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
