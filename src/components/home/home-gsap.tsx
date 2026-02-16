"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function HomeGsap() {
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			return;
		}

		gsap.registerPlugin(ScrollTrigger);

		const ctx = gsap.context(() => {
			gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((element) => {
				gsap.fromTo(
					element,
					{ y: 42, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						duration: 0.9,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((element) => {
				gsap.fromTo(
					element,
					{ x: -44, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.95,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((element) => {
				gsap.fromTo(
					element,
					{ x: 44, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.95,
						ease: "power3.out",
						scrollTrigger: {
							trigger: element,
							start: "top 82%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>(".stagger-parent").forEach((parent) => {
				const items = parent.querySelectorAll<HTMLElement>(".stagger-item");
				if (!items.length) {
					return;
				}

				gsap.fromTo(
					items,
					{ y: 28, opacity: 0 },
					{
						y: 0,
						opacity: 1,
						stagger: 0.12,
						duration: 0.75,
						ease: "power3.out",
						scrollTrigger: {
							trigger: parent,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					},
				);
			});

			gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((counter) => {
				const target = Number(counter.dataset.counter || "0");
				const value = { count: 0 };
				gsap.to(value, {
					count: target,
					duration: 1.5,
					ease: "power2.out",
					scrollTrigger: {
						trigger: counter,
						start: "top 85%",
						once: true,
					},
					onUpdate: () => {
						counter.textContent = `${Math.round(value.count)}+`;
					},
				});
			});

			gsap.utils
				.toArray<HTMLElement>(".float-shape")
				.forEach((shape, index) => {
					gsap.to(shape, {
						y: index % 2 === 0 ? -18 : 18,
						x: index % 2 === 0 ? 8 : -8,
						duration: 4.2 + index * 0.3,
						repeat: -1,
						yoyo: true,
						ease: "sine.inOut",
					});
				});
		});

		return () => ctx.revert();
	}, []);

	return null;
}
