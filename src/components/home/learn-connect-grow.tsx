"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Sprout, UsersRound } from "lucide-react";
import { useEffect, useRef } from "react";
import { CircleShape } from "@/components/shapes/circle-shape";
import { SquareShape } from "@/components/shapes/square-shape";
import { TriangleShape } from "@/components/shapes/triangle-shape";

const items = [
	{
		title: "Learn",
		text: "Learn from a range of technical topics and gain new skills through hands-on workshops, events, talks, competitions, and project-building activities.",
		icon: FileText,
	},
	{
		title: "Connect",
		text: "Meet passionate Centralian students interested in developer technologies eager to build practical solutions.",
		icon: UsersRound,
	},
	{
		title: "Grow",
		text: "Apply new learnings to build great solutions for local problems. Give back to your community by helping others learn.",
		icon: Sprout,
	},
];

export default function LearnConnectGrow() {
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
			const shapes = gsap.utils.toArray<HTMLElement>(".lcg-shape");
			const cards = gsap.utils.toArray<HTMLElement>(".lcg-card");
			const title = gsap.utils.toArray<HTMLElement>(".lcg-title");

			gsap.fromTo(
				shapes,
				{
					opacity: 0,
					scale: 0.75,
					y: 24,
					rotate: -8,
				},
				{
					opacity: 1,
					scale: 1,
					y: 0,
					rotate: 0,
					duration: 1,
					ease: "power3.out",
					stagger: 0.08,
					scrollTrigger: {
						trigger: section,
						start: "top 78%",
						once: true,
					},
				},
			);

			gsap.fromTo(
				title,
				{
					opacity: 0,
					y: 20,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.85,
					ease: "power3.out",
					scrollTrigger: {
						trigger: section,
						start: "top 78%",
						once: true,
					},
				},
			);

			gsap.fromTo(
				cards,
				{
					opacity: 0,
					y: 28,
				},
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "power3.out",
					stagger: 0.14,
					scrollTrigger: {
						trigger: section,
						start: "top 72%",
						once: true,
					},
				},
			);

			shapes.forEach((shape, index) => {
				const drift = index % 2 === 0 ? -10 : 10;
				gsap.to(shape, {
					y: drift,
					duration: 3 + index * 0.2,
					ease: "sine.inOut",
					yoyo: true,
					repeat: -1,
				});
			});
		}, section);

		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={sectionRef}
			className="reveal-up relative overflow-hidden bg-primary px-4 py-14 text-primary-foreground md:px-8 md:py-20 bg-linear-to-r from-[#3186ff] to-[#1b38cc] "
		>
			{/* Shapes */}
			<div className="pointer-events-none absolute inset-0 overflow-hidden">
				{/* Top Left Circle */}
				<CircleShape className="lcg-shape absolute -left-16 -top-16 w-40  md:-left-12 md:-top-12 md:w-56 md:text-white" />

				{/* Bottom Left Triangle */}
				<TriangleShape className="lcg-shape absolute -left-25 bottom-0 w-48  md:-bottom-10 md:w-52 md:text-white" />

				{/* Top Right Circle (Mobile) / Middle Right Circle (Desktop) */}
				<CircleShape className="lcg-shape absolute -right-24 top-0 w-40  md:-top-10 md:right-[25%] md:w-48 md:text-white" />

				{/* Bottom Right Square (Mobile) / Top Far Right Square (Desktop) */}
				<SquareShape className="lcg-shape absolute -bottom-16 -right-16 w-48  md:-right-10 md:-top-10 md:w-64 md:text-white" />

				{/* Bottom Right Circle (Desktop only) */}
				<CircleShape className="lcg-shape absolute hidden md:block md:-bottom-10 md:right-10 md:w-48 md:text-white" />
			</div>

			<div className="relative z-10 mx-auto px-8 md:px-20 lg:px-40 xl:px-58 xl:py-0 py-20">
				<h2 className="lcg-title font-display text-[30px] font-medium leading-10 text-center text-primary-foreground [text-shadow:0_3px_16px_rgba(10,24,97,0.45)] md:max-w-md md:text-left lg:max-w-[70%] md:text-[64px] md:leading-tight">
					Join us as we Learn, Connect, &amp; Grow
				</h2>

				<div className="stagger-parent mt-10 flex flex-col items-center gap-10 md:items-start md:flex-row justify-between w-full">
					{items.map((item) => {
						const Icon = item.icon;

						return (
							<article
								key={item.title}
								className="lcg-card stagger-item flex max-w-[34ch] flex-col items-center text-center md:items-start md:text-left"
							>
								<Icon
									className="h-8 w-8 text-primary-foreground md:h-9 md:w-9"
									strokeWidth={2}
								/>
								<h3 className="font-display mt-5 text-[24px] font-medium text-primary-foreground md:text-2xl">
									{item.title}
								</h3>
								<p className="mt-3 leading-relaxed text-primary-foreground/95 text-base">
									{item.text}
								</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
