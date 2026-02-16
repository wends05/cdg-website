import { FileText, Sprout, UsersRound } from "lucide-react";

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
	return (
		<section className="reveal-up relative overflow-hidden bg-linear-to-r from-[#3b88f7] to-[#2339cb] px-4 py-16 text-white md:px-8 md:py-20">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -left-28 -top-28 z-0 h-44 w-44 rounded-full border-[14px] border-white/95 md:-left-36 md:-top-36 md:h-80 md:w-80 md:border-[20px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-10 -top-6 z-0 h-28 w-28 rotate-45 border-[10px] border-white/95 md:-right-20 md:-top-14 md:h-56 md:w-56 md:border-[16px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute left-0 bottom-1 z-0 h-28 w-28 -translate-x-1/2 rotate-[16deg] border-[8px] border-white/95 md:bottom-8 md:h-52 md:w-52 md:border-[12px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute -right-8 bottom-0 z-0 h-24 w-24 translate-y-1/2 rounded-full border-[10px] border-white/95 md:-right-16 md:h-60 md:w-60 md:border-[16px]"
			/>
			<div
				aria-hidden="true"
				className="pointer-events-none absolute right-1/2 -top-24 z-0 h-20 w-20 translate-x-[45%] rounded-full border-[10px] border-white/95 md:-top-28 md:h-44 md:w-44 md:border-[14px]"
			/>

			<div className="relative z-10 mx-auto max-w-7xl px-3 md:px-8">
				<h2 className="reveal-left text-4xl font-semibold leading-tight text-white md:text-6xl">
					Join us as We Learn, Connect, &amp; Grow
				</h2>
				<div className="stagger-parent mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-14">
					{items.map((item) => {
						const Icon = item.icon;

						return (
							<article key={item.title} className="stagger-item">
								<Icon className="h-9 w-9 text-white" strokeWidth={2.2} />
								<h3 className="mt-6 text-4xl font-semibold text-white md:text-[2.05rem]">
									{item.title}
								</h3>
								<p className="mt-4 max-w-[30ch] text-[1.08rem] leading-snug text-white/95 md:text-[2rem] md:leading-tight">
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
