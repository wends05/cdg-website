"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DescriptionSection() {
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

						<VideoCarousel />
					</CardContent>
				</Card>
			</div>
		</section>
	);
}

const VIDEOS = [
	"https://www.facebook.com/reel/849249970882632",
	"https://www.facebook.com/reel/1193962822679603",
	"https://www.facebook.com/reel/1365579612032403",
];

function VideoCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
	const prevVideo = () =>
		setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);

	const currentVideoUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
		VIDEOS[currentIndex],
	)}&show_text=false&width=auto`;

	return (
		<div className="reveal-right relative w-full">
			<div className="relative aspect-video w-full bg-card outline outline-foreground">
				{/* Inner outline as per Figma */}
				<div className="absolute inset-0 m-px outline outline-foreground overflow-hidden bg-black">
					<iframe
						key={currentIndex}
						src={currentVideoUrl}
						className="absolute inset-0 h-full w-full border-none overflow-hidden"
						scrolling="no"
						frameBorder="0"
						allowFullScreen={true}
						allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
						title={`Facebook Video ${currentIndex + 1}`}
					/>
				</div>

				{/* Navigation Buttons */}
				<button
					type="button"
					onClick={prevVideo}
					className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground outline outline-muted-foreground backdrop-blur-sm transition-transform hover:scale-105"
					aria-label="Previous video"
				>
					<ChevronLeft className="h-6 w-6" />
				</button>
				<button
					type="button"
					onClick={nextVideo}
					className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground outline outline-muted-foreground backdrop-blur-sm transition-transform hover:scale-105"
					aria-label="Next video"
				>
					<ChevronRight className="h-6 w-6" />
				</button>

				{/* Carousel Indicators */}
				<div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/50 px-3 py-1.5 backdrop-blur-sm">
					{VIDEOS.map((_, idx) => (
						<button
							key={idx}
							type="button"
							onClick={() => setCurrentIndex(idx)}
							className={`rounded-full transition-all ${
								idx === currentIndex
									? "h-3.5 w-3.5 bg-primary"
									: "h-2.5 w-2.5 bg-muted hover:bg-muted-foreground"
							}`}
							aria-label={`Go to video ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
