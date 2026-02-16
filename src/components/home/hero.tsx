"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const leftColumnOfficers = ["angel", "dave", "keith", "newyeareign"];
const rightColumnOfficers = ["pia", "ng", "jenny", "axxel"];
const leftScrollOfficers = [...leftColumnOfficers, ...leftColumnOfficers];
const rightScrollOfficers = [...rightColumnOfficers, ...rightColumnOfficers];

export default function Hero() {
	const sectionRef = useRef<HTMLElement | null>(null);
	const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

	const markImageLoaded = (src: string) => {
		setLoadedImages((prev) => {
			if (prev[src]) {
				return prev;
			}

			return { ...prev, [src]: true };
		});
	};

	useEffect(() => {
		const section = sectionRef.current;
		if (!section) {
			return;
		}

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			const shapes = gsap.utils.toArray<HTMLElement>(".hero-shape");
			const copyItems = gsap.utils.toArray<HTMLElement>(".hero-copy-item");

			shapes.forEach((shape, index) => {
				const direction = shape.dataset.direction === "right" ? 1 : -1;

				gsap.fromTo(
					shape,
					{
						x: 36 * direction,
						y: 40,
						rotation: -12 * direction,
						opacity: 0,
					},
					{
						x: 0,
						y: 0,
						rotation: 0,
						opacity: 1,
						duration: 1.1,
						ease: "power3.out",
						delay: index * 0.08,
						clearProps: "opacity",
					},
				);
			});

			gsap.to(shapes, {
				y: -40,
				rotation: 8,
				ease: "none",
				scrollTrigger: {
					trigger: section,
					start: "top bottom",
					end: "bottom top",
					scrub: 0.6,
				},
			});

			gsap.fromTo(
				copyItems,
				{
					y: 20,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.9,
					ease: "power3.out",
					stagger: 0.14,
					delay: 0.15,
					clearProps: "opacity,transform",
				},
			);
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="home"
			ref={sectionRef}
			className="relative overflow-hidden bg-linear-to-r from-[#3987f5] to-[#2138c8] px-3 pt-6 text-white md:min-h-190 md:pt-0"
		>
			<div className="relative mx-auto h-full max-w-420">
				{/* Geometric accents */}
				<div
					className="hero-shape absolute -left-16 top-44 h-24 w-24 rounded-full border-[7px] border-white/95 md:-left-20 md:top-6 md:h-65 md:w-65 md:border-14"
					data-direction="left"
				></div>
				<div
					className="hero-shape absolute bottom-12 left-2 hidden h-10 w-10 rounded-full border-[5px] border-white/95 sm:block md:bottom-8 md:left-8 md:h-24 md:w-24 md:border-10"
					data-direction="left"
				></div>
				<div
					className="hero-shape absolute -right-12 bottom-0 hidden h-107.5 w-107.5 rounded-full border-14 border-white/95 md:block"
					data-direction="right"
				></div>
				<div
					className="hero-shape absolute right-[34%] top-[15%] hidden h-44 w-44 rotate-45 border-10 border-white/95 md:block"
					data-direction="right"
				></div>
				<div
					className="hero-shape absolute right-[45%] top-[60%] hidden -translate-y-1/2 md:block"
					data-direction="left"
					style={{
						width: 0,
						height: 0,
						borderLeft: "60px solid transparent",
						borderRight: "60px solid transparent",
						borderTop: "100px solid rgba(255,255,255,0.95)",
					}}
				></div>
				<div
					className="hero-shape absolute bottom-8 left-[30%] hidden h-24 w-24 rotate-45 border-8 border-white/95 md:block"
					data-direction="left"
				></div>

				{/* Content */}
				<div className="relative mx-auto max-w-full pt-6 md:py-0">
					<div className="grid h-full items-center gap-10 md:min-h-190 md:grid-cols-2 md:items-center">
						{/* Left side - Content */}
						<LeftSection
							loadedImages={loadedImages}
							markImageLoaded={markImageLoaded}
						/>

						{/* Right side - Photo Collage */}
						<OfficerCarousel
							loadedImages={loadedImages}
							markImageLoaded={markImageLoaded}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

interface LeftSectionProps {
	loadedImages: Record<string, boolean>;
	markImageLoaded: (imagePath: string) => void;
}

function LeftSection({ loadedImages, markImageLoaded }: LeftSectionProps) {
	return (
		<div className="z-10 flex flex-col items-center pt-4 text-center sm:pt-12 md:items-start md:text-left md:px-4 lg:px-20 xl:px-44 ">
			{/* CDG Logo + wordmark */}
			<div className="hero-copy-item mb-5 inline-flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
				<div className="relative h-10 w-16 sm:h-20 sm:w-32 md:h-24 md:w-36">
					{!loadedImages["/logo_1.svg"] && (
						<Skeleton className="absolute inset-0 rounded-sm bg-white/25" />
					)}
					<Image
						src="/logo_1.svg"
						alt="Centralian Developer Group logo"
						fill
						priority
						onLoadingComplete={() => markImageLoaded("/logo_1.svg")}
						sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, 144px"
						className={`object-contain object-left transition-opacity duration-300 ${
							loadedImages["/logo_1.svg"] ? "opacity-100" : "opacity-0"
						}`}
					/>
				</div>
				<h2 className="md:text-4xl lg:text-5xl font-medium leading-[1.08]">
					Centralian
					<br />
					Developer
					<br />
					Group
				</h2>
			</div>

			<p className="hero-copy-item mb-6 max-w-70 lg:max-w-90 leading-relaxed text-white/95 ">
				Be a part of CDG to learn, build, and grow with fellow student
				developers
			</p>

			<button className="hero-copy-item mx-auto inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-base font-semibold text-[#2565e6] transition-all hover:bg-white/90 md:mx-0 md:px-8 md:py-3">
				Join Now
				<span className="text-base leading-none">{">"}</span>
			</button>
		</div>
	);
}

interface OfficerCarouselProps {
	loadedImages: Record<string, boolean>;
	markImageLoaded: (src: string) => void;
}

interface OfficerImageItemProps {
	officer: string;
	loadedImages: Record<string, boolean>;
	markImageLoaded: (src: string) => void;
}

function OfficerImageItem({
	officer,
	loadedImages,
	markImageLoaded,
}: OfficerImageItemProps) {
	const imageSrc = `/officers/${officer}.svg`;
	const isLoaded = loadedImages[imageSrc];

	return (
		<div className="relative overflow-hidden rounded-3xl shadow-[0_12px_30px_rgba(20,33,110,0.24)]">
			{!isLoaded && (
				<Skeleton className="absolute inset-0 z-10 rounded-3xl bg-white/35" />
			)}
			<Image
				preload
				src={imageSrc}
				alt={`${officer} officer portrait`}
				width={280}
				height={350}
				onLoadingComplete={() => markImageLoaded(imageSrc)}
				className={`h-auto w-full object-cover transition-opacity duration-300 ${
					isLoaded ? "opacity-100" : "opacity-0"
				}`}
			/>
		</div>
	);
}

function OfficerCarousel({
	loadedImages,
	markImageLoaded,
}: OfficerCarouselProps) {
	return (
		<div className="relative z-10 mx-auto h-112 w-full max-w-[24rem] overflow-hidden sm:h-136 sm:max-w-120 md:h-190 md:max-w-xl">
			<div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-linear-to-b from-[#2559d9] to-transparent sm:h-20" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t from-[#2559d9] to-transparent sm:h-20" />

			<div className="grid h-full grid-cols-2 gap-3 sm:gap-4 md:gap-5">
				<div
					className="overflow-hidden"
					style={{ "--scroll-gap": "12px" } as CSSProperties}
				>
					<div className="scroll-up flex flex-col gap-3 sm:gap-4 md:gap-5">
						{leftScrollOfficers.map((officer, index) => (
							<OfficerImageItem
								key={`left-${officer}-${index}`}
								officer={officer}
								loadedImages={loadedImages}
								markImageLoaded={markImageLoaded}
							/>
						))}
					</div>
				</div>

				<div
					className="overflow-hidden"
					style={{ "--scroll-gap": "12px" } as CSSProperties}
				>
					<div className="scroll-down flex flex-col gap-3 sm:gap-4 md:gap-5">
						{rightScrollOfficers.map((officer, index) => (
							<OfficerImageItem
								key={`right-${officer}-${index}`}
								officer={officer}
								loadedImages={loadedImages}
								markImageLoaded={markImageLoaded}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
