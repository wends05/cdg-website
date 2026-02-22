import Image from "next/image";
import solutionsBG from "@/../public/assets/solutions_bg.svg";

export default function CommunityStats() {
	return (
		<section className="reveal-up relative overflow-hidden px-4 py-28 md:px-8 text-primary">
			<Image src={solutionsBG} alt="Community Stats" fill />

			<div className="relative mx-auto max-w-7xl text-center space-y-5">
				<h2 className="font-display text-5xl font-medium md:text-[64px]">
					Building Solutions for the Community
				</h2>
				<p className="mt-2">CDG has grown over the years</p>
				<p
					data-counter="215"
					className="mt-5 text-7xl font-semibold leading-none"
				>
					215+
				</p>
				<p className="mt-1 text-xl">Members</p>
			</div>
		</section>
	);
}
