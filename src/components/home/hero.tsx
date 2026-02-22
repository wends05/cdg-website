"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const leftColumnOfficers = ["angela", "dave", "keith", "newyeareign"];
const rightColumnOfficers = ["pia", "anfernee", "jenny", "axxel"];
const leftScrollOfficers = [...leftColumnOfficers, ...leftColumnOfficers];
const rightScrollOfficers = [...rightColumnOfficers, ...rightColumnOfficers];

import { CircleShape } from "@/components/shapes/circle-shape";
import { SquareShape } from "@/components/shapes/square-shape";
import { TriangleShape } from "@/components/shapes/triangle-shape";

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
			className="relative overflow-hidden bg-linear-to-r from-[#3186FF] to-[#1B38CC]  px-3 pt-6 text-primary-foreground md:min-h-190 md:pt-0"
		>
			{/* Background Lines */}
			<div className="pointer-events-none absolute inset-0 z-0 select-none">
				{/* Mobile Background */}
				<div className="absolute inset-0 block top-0 md:hidden">
					<Image
						src="/hero-mobile-bg.svg"
						alt=""
						fill
						className="object-cover object-bottom opacity-40"
						priority
					/>
				</div>
				{/* Desktop Background */}
				<div className="absolute inset-0 top-0 hidden md:block">
					<Image
						src="/hero-bg.svg"
						alt=""
						fill
						className="object-cover object-bottom opacity-30"
						priority
					/>
				</div>
			</div>

			<div className="relative mx-auto h-full max-w-420">
				{/* Mobile Geometric accents */}
				<div className="lg:hidden absolute inset-0 pointer-events-none">
					<CircleShape
						className="hero-shape absolute -left-13 top-76.25 text-primary-foreground opacity-95 w-29.25 h-29.25"
						data-direction="left"
					/>
					<CircleShape
						className="hero-shape absolute right-3 -bottom-16 text-primary-foreground opacity-95 w-37 h-37"
						data-direction="right"
					/>
					<CircleShape
						className="hero-shape absolute left-9 top-181.25 text-primary-foreground opacity-95 w-24.5 h-24.5"
						data-direction="left"
					/>
					<SquareShape
						className="hero-shape absolute -left-10 -top-8.75 text-primary-foreground opacity-95 w-68.5 h-68.5"
						data-direction="right"
					/>
					<TriangleShape
						className="hero-shape absolute right-12 top-48.5 text-primary-foreground opacity-95 w-26 h-22.75"
						data-direction="left"
					/>
				</div>

				{/* Desktop Geometric accents */}
				<div className="lg:block hidden">
					<div
						className="hero-shape absolute -left-16 top-44 h-24 w-24 rounded-full border-[7px] border-primary-foreground/95 md:-left-20 md:top-6 md:h-65 md:w-65 md:border-14"
						data-direction="left"
					></div>
					<div
						className="hero-shape absolute bottom-12 left-2 hidden h-10 w-10 rounded-full border-[5px] border-primary-foreground/95 sm:block md:bottom-8 md:left-8 md:h-24 md:w-24 md:border-10"
						data-direction="left"
					></div>
					<div
						className="hero-shape absolute -right-12 bottom-0 hidden h-107.5 w-107.5 rounded-full border-14 border-primary-foreground/95 md:block"
						data-direction="right"
					></div>
					<div
						className="hero-shape absolute right-[34%] top-[15%] hidden h-44 w-44 rotate-45 border-10 border-primary-foreground/95 md:block"
						data-direction="right"
					></div>
					<div
						className="hero-shape absolute bottom-8 left-[30%] hidden h-24 w-24 rotate-45 border-8 border-primary-foreground/95 md:block"
						data-direction="left"
					></div>
				</div>
				<div
					className="hero-shape absolute right-[45%] top-[60%] hidden -translate-y-1/2 md:block"
					data-direction="left"
					style={{
						width: 0,
						height: 0,
						borderLeft: "60px solid transparent",
						borderRight: "60px solid transparent",
						borderTop: "100px solid hsl(var(--primary-foreground) / 0.95)",
					}}
				></div>

				{/* Content */}
				<div className="relative mx-auto max-w-full pt-6 md:py-0">
					<div className="grid h-full items-center gap-10 min-h-190 lg:grid-cols-2 lg:items-center">
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
		<div className="z-10 flex flex-col items-center pt-4 text-center sm:pt-12 lg:items-start md:text-left lg:px-12 xl:px-20">
			{/* CDG Logo + wordmark */}
			<div className="hero-copy-item mb-5 inline-flex items-center gap-3 flex-row sm:gap-5">
				<div className="relative w-30 h-20 lg:w-52 lg:h-40">
					{!loadedImages["/logo_1.svg"] && (
						<Skeleton className="absolute inset-0 rounded-sm bg-primary-foreground/25" />
					)}
					<Image
						src="/logo_1.svg"
						alt="Centralian Developer Group logo"
						fill
						priority
						onLoadingComplete={() => markImageLoaded("/logo_1.svg")}
						className={cn(
							"object-contain object-left transition-opacity duration-300",
							{
								"opacity-100": loadedImages["/logo_1.svg"],
								"opacity-0": !loadedImages["/logo_1.svg"],
							},
						)}
					/>
				</div>
				<h3 className="font-display text-4xl font-medium leading-[1.08]">
					Centralian
					<br />
					Developer
					<br />
					Group
				</h3>
			</div>

			<p className="hero-copy-item mb-6 max-w-70 lg:max-w-90 leading-relaxed text-primary-foreground/95 text-start ">
				Be a part of CDG to learn, build, and grow with fellow student
				developers
			</p>

			<Button
				className="px-6 h-12.5 rounded-full text-xl font-normal text-primary"
				nativeButton={false}
				variant={"outline"}
				render={
					<Link href="https://forms.gle/i8cn5thQXQF9CzMZ7">
						Join Now
						<span>
							<ChevronRight />
						</span>
					</Link>
				}
			/>
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
				<Skeleton className="absolute inset-0 z-10 rounded-3xl bg-primary-foreground/35" />
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
		<div className="relative z-10 mx-auto h-112 w-full max-w-[24rem] overflow-hidden sm:h-136 sm:max-w-120 md:h-190 md:max-w-xl lg:block hidden">
			{/* <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-linear-to-b from-[#3186FF] to-transparent sm:h-20" />
			<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-16 bg-linear-to-t from-[#1B38CC] to-transparent sm:h-20" /> */}

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
