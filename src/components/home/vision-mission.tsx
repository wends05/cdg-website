import Image from "next/image";
import lightBulbIcon from "@/../public/assets/light_bulb.svg";
import lightBulbIconBg from "@/../public/assets/light_bulb_bg.svg";
import targetIcon from "@/../public/assets/target.svg";
import targetIconBg from "@/../public/assets/target_bg.svg";

export default function VisionMission() {
	return (
		<section className="reveal-up relative overflow-hidden px-4 py-20 md:px-8 lg:h-106.25">
			{/* Background watermark - Lightbulb left */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block lg:-left-40.25"
			>
				<Image
					src={lightBulbIconBg}
					alt="Lightbulb Icon"
					width={444}
					height={425}
					className="h-106.25 w-150"
				/>
			</div>

			{/* Background watermark - Arrow right */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none lg:block lg:-right-42.75"
			>
				<Image
					src={targetIconBg}
					alt="Target Icon"
					width={425}
					height={425}
					className="h-106.25 w-150 stroke-[#A8C9FF]"
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-7xl">
				<div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-6">
					{/* Vision Section */}
					<article className="flex flex-1 flex-col gap-6 md:flex-row md:items-center md:gap-5">
						{/* Icon */}
						<div className="shrink-0 flex justify-center md:block">
							<div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full text-primary md:h-37.5 md:w-37.5 overflow-hidden">
								<div className="relative h-8 w-8 md:h-20.75 md:w-21.75">
									<Image
										src={lightBulbIcon}
										alt="Lightbulb Icon"
										fill
										className="object-contain"
									/>
								</div>
							</div>
						</div>

						{/* Content */}
						<div className="text-center md:text-left flex flex-col gap-5">
							<h3 className="font-display text-3xl font-medium text-primary md:text-5xl">
								Vision
							</h3>
							<p className="text-base leading-relaxed text-muted-foreground md:text-xl px-12">
								The Centralian Developer Group (CDG) envisions itself as a
								dynamic community of developers, holistically formed as men and
								women for and with others, driven by a passion for solving
								community challenges through technology, innovation, and
								collaboration.
							</p>
						</div>
					</article>

					{/* Vertical Separator (Desktop only) */}
					<div className="hidden h-auto w-px bg-border lg:block lg:self-stretch"></div>

					{/* Horizontal Separator (Mobile only) */}
					<div className="h-px w-full bg-border lg:hidden"></div>

					{/* Mission Section */}
					<article className="flex flex-1 flex-col gap-6 md:flex-row md:items-center md:gap-5">
						{/* Icon */}
						<div className="shrink-0 flex justify-center md:block">
							<div className="relative inline-flex h-16 w-16 items-center justify-center rounded-full text-primary md:h-37.5 md:w-37.5 overflow-hidden">
								<div className="relative h-8 w-8 md:h-20.75 md:w-20.75">
									<Image
										src={targetIcon}
										alt="Target Icon"
										fill
										className="object-contain"
									/>
								</div>
							</div>
						</div>

						{/* Content */}
						<div className="text-center md:text-left flex flex-col gap-5">
							<h3 className="font-display text-3xl font-medium text-primary md:text-5xl">
								Mission
							</h3>
							<p className="text-base leading-relaxed text-muted-foreground md:text-xl px-12">
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
