import { Lightbulb, Target } from "lucide-react";
import Image from "next/image";

export default function VisionMission() {
	return (
		<section className="reveal-up relative overflow-hidden  px-4 py-20 md:px-8">
			{/* Background watermark - Lightbulb left */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none md:block lg:-left-12"
			>
				<Image
					src="/assets/light_bulb.svg"
					alt=""
					width={100}
					height={100}
					className=" w-auto"
				/>
			</div>

			{/* Background watermark - Arrow right */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none md:block lg:-right-12"
			>
				<Image
					src="/assets/arrow.svg"
					alt=""
					width={100}
					height={100}
					className=" w-auto"
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:items-start md:gap-16">
					{/* Vision Section */}
					<article className="flex gap-6 md:pl-20">
						{/* Small icon */}
						<div className="shrink-0">
							<Lightbulb
								className="h-14 w-14 text-[#2f71f0]"
								strokeWidth={1.5}
							/>
						</div>

						{/* Content */}
						<div>
							<h3 className="mb-4 text-4xl font-bold text-[#2f71f0] md:text-5xl">
								Vision
							</h3>
							<p className="text-lg leading-relaxed text-zinc-500">
								The Centralian Developer Group (CDG) envisions itself as a
								dynamic community of developers, holistically formed as men and
								women for and with others, driven by a passion for solving
								community challenges through technology, innovation, and
								collaboration.
							</p>
						</div>
					</article>

					{/* Vertical Separator */}
					<div className="hidden md:flex md:h-auto md:items-stretch md:justify-center">
						<div className="w-px self-stretch bg-zinc-200"></div>
					</div>

					<div className="h-px w-full bg-zinc-200 md:hidden"></div>

					{/* Mission Section */}
					<article className="flex gap-6 md:pr-10">
						{/* Small icon */}
						<div className="shrink-0">
							<Target className="h-14 w-14 text-[#2f71f0]" strokeWidth={1.5} />
						</div>

						{/* Content */}
						<div>
							<h3 className="mb-4 text-4xl font-bold text-[#2f71f0] md:text-5xl">
								Mission
							</h3>
							<p className="text-lg leading-relaxed text-zinc-500">
								The mission of the Centralian Developer Group (CDG) is to
								empower students through accessible education in technology and
								programming, inspire innovation and a problem-solving mindset,
								and nurture the creation of timely and relevant technological
								solutions that contribute to the growth and sustainability of
								the community.
							</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
}
