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
				<Button
					type="button"
					onClick={prevVideo}
					className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/40 hover:scale-110 opacity-0 hover:opacity-100"
					aria-label="Previous video"
				>
					<ChevronLeft className="h-8 w-8" />
				</Button>
				<Button
					type="button"
					onClick={nextVideo}
					className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 opacity-0 hover:opacity-100 text-white backdrop-blur-md transition-all  hover:bg-white/40 hover:scale-110"
					aria-label="Next video"
				>
					<ChevronRight className="h-8 w-8" />
				</Button>

				{/* Carousel Indicators */}
				<div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/20 px-4 py-2 backdrop-blur-md">
					{VIDEOS.map((_, idx) => (
						<Button
							key={idx}
							type="button"
							onClick={() => setCurrentIndex(idx)}
							className={`rounded-full transition-all duration-300 ${
								idx === currentIndex
									? "h-3 w-8 bg-white"
									: "h-2 w-2 bg-white/50 hover:bg-white/80"
							}`}
							aria-label={`Go to video ${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
