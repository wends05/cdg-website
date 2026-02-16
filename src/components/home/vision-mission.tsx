import { Lightbulb, Target } from "lucide-react";
import Image from "next/image";

export default function VisionMission() {
	return (
		<section className="reveal-up relative overflow-hidden px-4 py-20 md:px-8">
			{/* Background watermark - Lightbulb left */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block lg:-left-12"
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
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block lg:-right-12"
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
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
					{/* Vision Section */}
					<article className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
						{/* Icon */}
						<div className="shrink-0 flex justify-center md:block">
							<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#2f71f0] md:h-20 md:w-20">
								<Lightbulb
									className="h-8 w-8 md:h-10 md:w-10"
									strokeWidth={1.5}
								/>
							</div>
						</div>

						{/* Content */}
						<div className="text-center md:text-left">
							<h3 className="mb-4 text-3xl font-bold text-[#2f71f0] md:text-4xl">
								Vision
							</h3>
							<p className="text-base leading-relaxed text-zinc-600 md:text-lg">
								The Centralian Developer Group (CDG) envisions itself as a
								dynamic community of developers, holistically formed as men and
								women for and with others, driven by a passion for solving
								community challenges through technology, innovation, and
								collaboration.
							</p>
						</div>
					</article>

					{/* Vertical Separator (Desktop only) */}
					<div className="hidden h-auto w-px bg-zinc-200 lg:block lg:self-stretch"></div>

					{/* Horizontal Separator (Mobile only) */}
					<div className="h-px w-full bg-zinc-200 lg:hidden"></div>

					{/* Mission Section */}
					<article className="flex flex-1 flex-col gap-6 md:flex-row md:items-center">
						{/* Icon */}
						<div className="shrink-0 flex justify-center md:block">
							<div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#2f71f0] md:h-20 md:w-20">
								<Target className="h-8 w-8 md:h-10 md:w-10" strokeWidth={1.5} />
							</div>
						</div>

						{/* Content */}
						<div className="text-center md:text-left">
							<h3 className="mb-4 text-3xl font-bold text-[#2f71f0] md:text-4xl">
								Mission
							</h3>
							<p className="text-base leading-relaxed text-zinc-600 md:text-lg">
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
