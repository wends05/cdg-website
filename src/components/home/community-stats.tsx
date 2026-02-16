import Image from "next/image";
import solutionsBG from "@/../public/assets/solutions_bg.svg";

export default function CommunityStats() {
  return (
		<section className="reveal-up relative overflow-hidden px-4 py-28 md:px-8 text-[#3186FF]">
			<Image src={solutionsBG} alt="Community Stats" fill />

      <div className="relative mx-auto max-w-7xl text-center">
        <h2 className="text-5xl font-semibold">
          Building Solutions for the Community
        </h2>
        <p className="mt-2">CDG has grown over the years</p>
        <p
          data-counter="140"
          className="mt-5 text-7xl font-semibold leading-none"
        >
          140+
        </p>
        <p className="mt-1 text-xl">Members</p>
      </div>
    </section>
  );
}
