import Image from "next/image";
import aboutPageHero from "@/../public/about-page-hero.png";
import logoMonochrome from "@/../public/logo_monochrome.svg";

export default function AboutHero() {
	return (
		<section className="relative isolate min-h-screen overflow-hidden">
			<div className="absolute inset-0">
				<Image
					src={aboutPageHero}
					alt="About Page Hero"
					className="h-full w-full object-cover"
					fill
					priority
				/>
			</div>
			<div className="absolute inset-0 bg-[#3186FF]/75" aria-hidden="true" />

			<div className="relative z-20 flex min-h-screen items-center justify-center px-6 pb-24 pt-20">
				<div className="flex max-w-5xl flex-col items-center gap-6 text-white sm:gap-8">
					<div className="flex max-w-md items-center gap-5">
						<Image
							src={logoMonochrome}
							alt="Centralian Developer Group logo"
							className="h-auto w-28 md:w-36 lg:w-40"
							priority
						/>
						<h1 className="text-[32px] leading-[1.05] font-semibold md:text-[48px] xl:text-[64px] ">
							Centralian Developer Group
						</h1>
					</div>
					<p className="mt-3 text-[22px] leading-tight font-medium md:text-[28px] xl:text-[40px]">
						Connect, Learn, Grow
					</p>
				</div>
			</div>

			<div
				className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-24 md:h-32 xl:h-100"
				aria-hidden="true"
			>
				<svg
					className="h-full w-full"
					viewBox="0 0 1440 240"
					preserveAspectRatio="none"
					aria-hidden="true"
					focusable="false"
				>
					<title>Decorative section divider</title>
					<path
						d="M0,0 C360,300 1080,300 1440,0 L1440,300 L0,300 Z"
						className="fill-white"
					/>
				</svg>
			</div>
		</section>
	);
}
