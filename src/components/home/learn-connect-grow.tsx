"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { CircleShape } from "@/components/shapes/circle-shape";
import { SquareShape } from "@/components/shapes/square-shape";
import { TriangleShape } from "@/components/shapes/triangle-shape";

const LearnIcon = () => (
	<svg
		width="30"
		height="37"
		viewBox="0 0 30 37"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Learn Icon</title>
		<path
			d="M6.42871 1.5H28.3926C28.3953 1.5 28.3962 1.49995 28.3984 1.50098C28.4024 1.50279 28.4142 1.50973 28.4297 1.52637C28.4612 1.56034 28.5 1.62894 28.5 1.73438V26.0156C28.5 26.0703 28.4879 26.1182 28.4707 26.1562C28.4533 26.1947 28.4342 26.2151 28.4268 26.2217L28.0664 26.5312L27.9502 26.9922C27.7597 27.7459 27.6934 28.9824 27.6934 30.0586C27.6934 31.1348 27.7597 32.3722 27.9502 33.126L28.0635 33.5771L28.4131 33.8848C28.4485 33.9159 28.5 33.9956 28.5 34.1094V35.2656C28.5 35.3711 28.4612 35.4397 28.4297 35.4736C28.4142 35.4903 28.4024 35.4972 28.3984 35.499C28.3962 35.5 28.3953 35.5 28.3926 35.5H6.42871C3.8136 35.5 1.5 33.1738 1.5 30.0625V6.9375C1.5 3.82618 3.8136 1.5 6.42871 1.5ZM6.42871 26.25C4.31614 26.25 2.78613 28.0719 2.78613 30.0625C2.78613 32.0604 4.30945 33.875 6.42871 33.875H27.2021L27.0322 32.2217C26.9155 31.0881 26.9155 29.0369 27.0322 27.9033L27.2021 26.25H6.42871ZM8.97363 7.75C7.81865 7.75 7.07129 8.72636 7.07129 9.68359V11.1289C7.07129 11.7363 7.37287 12.3503 7.8877 12.7188C7.37287 13.0872 7.07129 13.7012 7.07129 14.3086V15.7539C7.07129 16.7111 7.81865 17.6875 8.97363 17.6875H23.1699C24.3248 17.6873 25.0713 16.7111 25.0713 15.7539V14.3086C25.0713 13.7011 24.7698 13.0872 24.2549 12.7188C24.7698 12.3503 25.0713 11.7364 25.0713 11.1289V9.68359C25.0713 8.72644 24.3248 7.75016 23.1699 7.75H8.97363Z"
			stroke="white"
			stroke-width="3"
		/>
	</svg>
);

const ConnectIcon = () => (
	<svg
		width="40"
		height="32"
		viewBox="0 0 40 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Connect Icon</title>
		<path
			d="M20 18.4414C23.0677 18.4414 25.8499 19.4948 27.877 20.9561C29.8751 22.3988 31.2275 24.3159 31.2275 26.084C31.2275 26.9985 30.8623 27.7447 30.248 28.3271L30.2461 28.3291C29.6435 28.9026 28.7956 29.3269 27.792 29.6406H27.791C25.7778 30.2722 23.0178 30.5 20 30.5C16.9822 30.5 14.2222 30.2722 12.209 29.6406H12.208C11.2047 29.327 10.356 28.9026 9.75098 28.3281C9.13879 27.7466 8.77254 26.9995 8.77246 26.0859C8.77246 24.3178 10.1249 22.4007 12.123 20.958C14.1498 19.4951 16.932 18.4414 20 18.4414ZM5.83984 20.4746C4.74493 22.0428 3.9541 23.9364 3.9541 26.084C3.9541 26.21 3.95829 26.335 3.96387 26.459C3.74141 26.4118 3.53129 26.3598 3.33594 26.2988C2.82709 26.14 2.37749 25.9188 2.04785 25.6064L2.04199 25.6016L2.03613 25.5957C1.87135 25.4428 1.73619 25.2522 1.64258 25.0352C1.54902 24.8181 1.49996 24.581 1.5 24.3398V24.3389C1.5 23.3515 2.23935 22.3419 3.25391 21.6094C4.04075 21.0529 4.92069 20.6702 5.83984 20.4746ZM34.1602 20.4746C35.1484 20.6844 36.036 21.0958 36.7451 21.6064V21.6074C37.7598 22.3413 38.5 23.3486 38.5 24.3369C38.5 24.8609 38.2883 25.2857 37.9492 25.6074L37.9482 25.6084C37.6213 25.9192 37.1733 26.1399 36.6641 26.2988H36.6631C36.4681 26.3598 36.2579 26.4118 36.0352 26.459C36.0407 26.335 36.0459 26.21 36.0459 26.084C36.0459 23.9364 35.2552 22.0431 34.1602 20.4746ZM8.18164 9.0293C8.97223 9.0293 9.74192 9.35442 10.3174 9.9502C10.8943 10.5477 11.2275 11.3688 11.2275 12.2354C11.2275 13.1019 10.8944 13.923 10.3174 14.5205C9.74192 15.1163 8.97223 15.4414 8.18164 15.4414C7.39113 15.4414 6.62229 15.1162 6.04688 14.5205C5.46972 13.923 5.13673 13.102 5.13672 12.2354C5.13672 11.3687 5.46973 10.5477 6.04688 9.9502C6.62229 9.35447 7.39112 9.02935 8.18164 9.0293ZM31.8184 9.0293C32.6089 9.02934 33.3777 9.35447 33.9531 9.9502C34.5303 10.5477 34.8633 11.3687 34.8633 12.2354C34.8633 13.102 34.5303 13.923 33.9531 14.5205C33.3777 15.1162 32.6089 15.4414 31.8184 15.4414C31.0278 15.4414 30.2581 15.1163 29.6826 14.5205C29.1056 13.923 28.7725 13.1019 28.7725 12.2354C28.7725 11.3688 29.1057 10.5477 29.6826 9.9502C30.2581 9.35442 31.0278 9.0293 31.8184 9.0293ZM20 1.5C21.5138 1.5 22.9766 2.12197 24.0635 3.24707C25.1521 4.3741 25.7724 5.91378 25.7725 7.5293C25.7725 9.14486 25.1521 10.6845 24.0635 11.8115C22.9766 12.9367 21.5138 13.5586 20 13.5586C18.4862 13.5586 17.0234 12.9367 15.9365 11.8115C14.8479 10.6845 14.2275 9.14486 14.2275 7.5293C14.2276 5.91378 14.8479 4.3741 15.9365 3.24707C17.0234 2.12197 18.4862 1.5 20 1.5Z"
			stroke="white"
			stroke-width="3"
		/>
	</svg>
);

const GrowIcon = () => (
	<svg
		width="34"
		height="29"
		viewBox="0 0 34 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<title>Grow Icon</title>
		<path
			d="M17.3355 18.0724C16.5702 6.75923 6.49489 5.50222 1.55286 6.28786C1.93547 15.7155 8.8717 18.0724 12.8572 18.0724V25.2609C12.8572 26.4975 13.8597 27.5 15.0963 27.5C16.333 27.5 17.3355 26.4975 17.3355 25.2609V18.0724Z"
			stroke="white"
			stroke-width="3"
		/>
		<path
			d="M20.5094 13.6614C20.1268 10.6446 17.7268 7.96635 16.7702 7.33784C19.8137 0.569968 28.0456 1.24827 31.5529 1.87678C30.7876 9.79597 24.0166 13.0329 20.5094 13.6614Z"
			stroke="white"
			stroke-width="3"
		/>
	</svg>
);

const items = [
	{
		title: "Learn",
		text: "Learn from a range of technical topics and gain new skills through hands-on workshops, events, talks, competitions, and project-building activities.",
		icon: LearnIcon,
	},
	{
		title: "Connect",
		text: "Meet passionate Centralian students interested in developer technologies eager to build practical solutions.",
		icon: ConnectIcon,
	},
	{
		title: "Grow",
		text: "Apply new learnings to build great solutions for local problems. Give back to your community by helping others learn.",
		icon: GrowIcon,
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
								className="lcg-card stagger-item flex w-[34ch] flex-col items-center text-center md:items-start md:text-left"
							>
								<Icon
								// className="h-10 w-10 text-primary-foreground md:h-12 md:w-12"
								// strokeWidth={2}
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
