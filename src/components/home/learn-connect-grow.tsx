"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, Sprout, UsersRound } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import learnGrowConnectShapes from "@/../public/assets/learn_grow_connect.svg";

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
			<Image
				src={learnGrowConnectShapes}
				fill
				alt="Shapes"
				className="scale-115 -translate-y-10 lg:translate-y-0"
			/>

			<div className="relative z-10 mx-auto px-8 md:px-12 xl:px-20">
				<h2 className="lcg-title font-display text-4xl font-medium leading-tight text-primary-foreground [text-shadow:0_3px_16px_rgba(10,24,97,0.45)] md:max-w-md lg:max-w-200 xl:max-w-max md:text-[64px]">
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
									className="h-8 w-8 text-primary-foreground md:h-9 md:w-9"
									strokeWidth={2}
								/>
								<h3 className="font-display mt-5 text-2xl font-medium text-primary-foreground">
									{item.title}
								</h3>
								<p className="mt-3 leading-relaxed text-primary-foreground/95">
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
