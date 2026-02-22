"use client";

import Image from "next/image";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const officers = [
	{ name: "Andre", role: "President", image: "/officers/andre.svg" },
	{
		name: "Jenny",
		role: "Vice President for External Affairs",
		image: "/officers/jenny.svg",
	},
	{
		name: "Dave",
		role: "Vice President for Internal Affairs",
		image: "/officers/dave.svg",
	},

	{
		name: "Myk",
		role: "Vice President for Technology",
		image: "/officers/myk.svg",
	},
	{
		name: "Angela",
		role: "External Associate for Outreaches",
		image: "/officers/angela.svg",
	},
	{
		name: "Clarence",
		role: "External Associate for Partnerships",
		image: "/officers/clarence.svg",
	},
	{
		name: "Babylyn",
		role: "Internal Associate for Liaison",
		image: "/officers/babylyn.svg",
	},
	{
		name: "Keith",
		role: "Internal Associate for Membership",
		image: "/officers/keith.svg",
	},
	{ name: "Gwenyth", role: "Secretary", image: "/officers/gwenyth.svg" },
	{
		name: "Claire",
		role: "Assistant Secretary",
		image: "/officers/claire.svg",
	},
	{ name: "Raine", role: "Finance Head", image: "/officers/raine.svg" },
	{
		name: "Franchescka",
		role: "Finance Associate",
		image: "/officers/franchescka.svg",
	},
	{ name: "Thel", role: "Audit Head", image: "/officers/thel.svg" },
	{ name: "Elisha", role: "Marketing Head", image: "/officers/elisha.svg" },
	{ name: "Axxel", role: "Marketing Associate", image: "/officers/axxel.svg" },
	{ name: "Llarie", role: "Operations Head", image: "/officers/llarie.svg" },
	{
		name: "Newyeareign",
		role: "Operations Associate",
		image: "/officers/newyeareign.svg",
	},
	{ name: "Anfernee", role: "Adviser", image: "/officers/anfernee.svg" },
	{ name: "Pia", role: "Adviser", image: "/officers/pia.svg" },
];

export default function OfficersSection() {
	return (
		<section className="reveal-up bg-background py-14 md:py-24 w-full max-w-[100vw] overflow-hidden">
			<div className="mx-auto max-w-7xl px-4 md:px-8">
				<div className="px-2 md:px-4 flex flex-col items-start gap-5">
					<div className="flex flex-col gap-2">
						<h2 className="reveal-left text-4xl font-medium text-primary md:text-[50px] leading-tight font-display">
							Meet the CDG Officers
						</h2>
						<p className="reveal-left max-w-4xl text-lg text-foreground md:text-xl">
							Get to know the dedicated student leaders who guide our
							organization, support our members, and bring our vision to life.
						</p>
					</div>
				</div>
			</div>

			<div className="w-full mt-14 overflow-visible">
				<div className="px-8 max-w-[100vw] relative">
					<Carousel
						opts={{
							align: "start",
						}}
					>
						<CarouselContent className="ml-0 gap-4 w-full">
							{officers.map((officer, idx) => (
								<CarouselItem
									key={`${officer.name}-${idx}`}
									className="pl-0 basis-auto"
								>
									<article className="group relative overflow-hidden rounded-2xl h-100 w-68.5">
										<Image
											src={officer.image}
											alt={officer.name}
											fill
											className="object-cover transition duration-300 group-hover:scale-105"
										/>

										{/* Hover Overlay */}
										<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
											<h3 className="text-white text-2xl font-bold translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
												{officer.name}
											</h3>
											<p className="text-white/90 text-base font-medium translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0">
												{officer.role}
											</p>
										</div>
									</article>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="mt-12 flex items-center justify-center gap-6 pr-4 md:pr-8">
							<CarouselPrevious className="static size-10 translate-y-0 border-0 bg-primary text-primary-foreground shadow-none hover:bg-primary/90 disabled:bg-primary/50" />
							<CarouselNext className="static size-10 translate-y-0 border-0 bg-primary text-primary-foreground shadow-none hover:bg-primary/90 disabled:bg-primary/50" />
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	);
}
