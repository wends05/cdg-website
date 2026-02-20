import { ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DescriptionSectionV2() {
	return (
		<section className="reveal-up bg-background px-4 py-16 md:px-8 lg:py-24">
			<div className="mx-auto max-w-7xl">
				<Card className="border-none bg-transparent py-0 shadow-none ring-0">
					<CardContent className="grid items-center gap-12 px-2 py-0 lg:grid-cols-[1fr_1.5fr] md:px-4">
						<div className="reveal-left flex flex-col items-start gap-5">
							<div className="flex flex-col">
								<h2 className="text-5xl font-medium md:text-6xl lg:text-[64px] leading-tight">
									<span className="bg-clip-text text-transparent bg-linear-to-r from-[#533da2] to-[#9daf15]">
										Together we,
									</span>
								</h2>
								<h2 className="font-display text-5xl font-medium text-primary md:text-6xl lg:text-[64px] leading-tight">
									create
								</h2>
							</div>
							<p className="text-base font-normal leading-relaxed text-foreground md:text-lg lg:text-xl">
								The Centralian Developer Group (CDG) is a multidisciplinary
								community of high school and collegiate students committed to
								advancing knowledge through peer-to-peer learning, fostering
								professional and personal networks, and developing innovative
								solutions to address local challenges through technology and
								development.
							</p>
							<Button className="px-6 h-12.5 rounded-full text-xl font-normal text-primary-foreground hover:bg-primary/90">
								See More
								<ChevronRight className="ml-2 h-5 w-5" />
							</Button>
						</div>

						<div className="reveal-right relative w-full">
							<div className="relative aspect-video w-full bg-card outline outline-foreground">
								{/* Inner outline as per Figma */}
								<div className="absolute inset-0 m-px outline outline-foreground" />

								{/* Play Button */}
								<button
									type="button"
									className="absolute left-1/2 top-1/2 flex h-20 w-20 md:h-24 md:w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-card outline outline-muted-foreground transition-transform hover:scale-105"
									aria-label="Play intro video"
								>
									<Play className="ml-1 h-8 w-8 md:h-10 md:w-10 text-muted-foreground fill-muted-foreground" />
								</button>

								{/* Carousel Indicators */}
								<div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
									<div className="h-3.5 w-3.5 rounded-full bg-primary" />
									<div className="h-2.5 w-2.5 rounded-full bg-muted" />
									<div className="h-2.5 w-2.5 rounded-full bg-muted" />
									<div className="h-2.5 w-2.5 rounded-full bg-muted" />
									<div className="h-2.5 w-2.5 rounded-full bg-muted" />
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
