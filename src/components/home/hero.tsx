"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
	const sectionRef = useRef<HTMLElement | null>(null);

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

			shapes.forEach((shape, index) => {
				const direction = shape.dataset.direction === "right" ? 1 : -1;

				gsap.fromTo(
					shape,
					{ x: 36 * direction, y: 40, rotation: -12 * direction, opacity: 0 },
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
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			id="home"
			ref={sectionRef}
			className="relative overflow-hidden bg-linear-to-r from-[#3186FF] to-[#1B38CC] px-3 pt-20 text-white"
		>
			<div className="relative mx-auto h-full max-w-full overflow-hidden">
				{/* Geometric accents */}
				<div
					className="hero-shape absolute h-44 w-44 rounded-full border-14 border-white/95"
					data-direction="left"
				></div>
				<div
					className="hero-shape absolute left-[30%] top-[10%] h-12 w-12 rounded-full border-8 border-white/95"
					data-direction="right"
				></div>
				<div
					className="hero-shape absolute bottom-4 left-4 h-20 w-20 rounded-full border-10 border-white/95"
					data-direction="left"
				></div>
				<div
					className="hero-shape absolute right-24 bottom-0 h-72 w-72 rounded-full border-12 border-white/95"
					data-direction="right"
				></div>
				<div
					className="hero-shape absolute right-[35%] top-[16%] h-48 w-48 border-10 border-white/95 rotate-45"
					data-direction="right"
				></div>
				<div
					className="hero-shape absolute right-[46%] top-[58%] -translate-y-1/2"
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
					className="hero-shape absolute bottom-8 left-[30%] h-20 w-20 rotate-45 border-8 border-white/95"
					data-direction="left"
				></div>

				{/* Content */}
				<div className="relative mx-auto max-w-full px-4 py-10 md:px-6 md:py-8">
					<div className="grid items-center gap-8 md:grid-cols-2 md:items-start">
						{/* Left side - Content */}
						<div className="z-10 flex flex-col items-center pt-10 text-center sm:pt-14 md:items-start md:pt-25 md:pl-35 md:text-left">
							{/* CDG Logo + wordmark */}
							<div className="mb-4 inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
								<div className="relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-36">
									<Image
										src="/logo_1.svg"
										alt="Centralian Developer Group logo"
										fill
										priority
										sizes="(max-width: 640px) 96px, (max-width: 768px) 120px, 144px"
										className="object-contain object-left"
									/>
								</div>
								<h2 className="text-4xl font-medium leading-[1.08] sm:text-5xl md:text-[3rem]">
									Centralian
									<br />
									Developer
									<br />
									Group
								</h2>
							</div>

							<p className="mb-5 max-w-104 text-base leading-relaxed text-white/90">
								Be a part of CDG to learn, build, and grow with fellow student
								developers
							</p>

							<button className="mx-auto inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-white/90 md:mx-0">
								Join Now
								<span className="text-base leading-none">{">"}</span>
							</button>
						</div>

						{/* Right side - Photo Collage */}
						<div className="relative h-full min-h-96 overflow-hidden pt-2 md:pl-6 md:pt-2">
							{/* Edge fade masks */}
							<div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-linear-to-b from-[#2f79f2] to-transparent" />
							<div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-linear-to-t from-[#2559d9] to-transparent" />

							<div className="grid h-130 grid-cols-2 gap-3">
								<div className="overflow-hidden">
									<div className="scroll-up flex flex-col gap-3">
										{[1, 2, 3, 1, 2, 3].map((photo, idx) => (
											<div
												key={`left-${photo}-${idx}`}
												className="aspect-4/5 rounded-xl bg-yellow-400 shadow-lg overflow-hidden"
											>
												<div className="w-full h-full bg-yellow-400 flex items-center justify-center">
													<span className="text-white text-sm font-medium">
														Photo {photo}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>

								<div className="overflow-hidden">
									<div className="scroll-down flex flex-col gap-3">
										{[4, 5, 6, 4, 5, 6].map((photo, idx) => (
											<div
												key={`right-${photo}-${idx}`}
												className="aspect-4/5 rounded-xl bg-yellow-400 shadow-lg overflow-hidden"
											>
												<div className="w-full h-full bg-yellow-400 flex items-center justify-center">
													<span className="text-white text-sm font-medium">
														Photo {photo}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
