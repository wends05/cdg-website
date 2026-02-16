"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Sprout, UsersRound } from "lucide-react";
import { useEffect, useRef } from "react";

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
			className="reveal-up relative overflow-hidden bg-linear-to-r from-[#3c8af8] to-[#2339cb] px-4 py-14 text-white md:px-8 md:py-20"
		>
			<div
				aria-hidden="true"
				className="lcg-shape pointer-events-none absolute -left-28 -top-32 z-0 h-56 w-56 rounded-full border-[14px] border-white/95 md:-left-24 md:-top-20 md:h-72 md:w-72 md:border-[18px]"
			/>
			<div
				aria-hidden="true"
				className="lcg-shape pointer-events-none absolute left-1/2 -top-20 z-0 h-24 w-24 -translate-x-1/2 rounded-full border-[10px] border-white/95 md:-top-24 md:h-48 md:w-48 md:border-[16px]"
			/>
			<div
				aria-hidden="true"
				className="lcg-shape pointer-events-none absolute -right-8 top-5 z-0 h-28 w-28 rotate-45 border-[10px] border-white/95 md:-right-20 md:-top-5 md:h-56 md:w-56 md:border-[16px]"
			/>
			<div
				aria-hidden="true"
				className="lcg-shape pointer-events-none absolute -left-14 bottom-0 z-0 h-28 w-28 translate-y-1/2 rotate-[16deg] border-[10px] border-white/95 md:-left-14 md:bottom-0 md:h-52 md:w-52 md:border-[14px]"
			/>
			<div
				aria-hidden="true"
				className="lcg-shape pointer-events-none absolute -right-8 bottom-0 z-0 h-24 w-24 translate-y-1/2 rounded-full border-[10px] border-white/95 md:-right-16 md:h-60 md:w-60 md:border-[16px]"
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-3 md:px-8">
				<h2 className="lcg-title text-4xl font-semibold leading-tight text-white [text-shadow:0_3px_16px_rgba(10,24,97,0.45)] md:text-5xl lg:text-6xl">
					Join us as We Learn, Connect, &amp; Grow
				</h2>

				<div className="stagger-parent mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-12">
					{items.map((item) => {
						const Icon = item.icon;

						return (
							<article
								key={item.title}
								className="lcg-card stagger-item max-w-[34ch]"
							>
								<Icon
									className="h-8 w-8 text-white md:h-9 md:w-9"
									strokeWidth={2}
								/>
								<h3 className="mt-5 text-2xl font-semibold text-white md:text-4xl lg:text-[2.8rem]">
									{item.title}
								</h3>
								<p className="mt-3 text-base leading-relaxed text-white/95 md:text-xl lg:text-2xl">
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
