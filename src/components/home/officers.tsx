"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const officers = [
	{
		name: "Andre",
		role: "CDG Officer",
		image: "/officers/andre.svg",
	},
	{
		name: "Angel",
		role: "CDG Officer",
		image: "/officers/angel.svg",
	},
	{
		name: "Axxel",
		role: "CDG Officer",
		image: "/officers/axxel.svg",
	},
	{
		name: "Babylyn",
		role: "CDG Officer",
		image: "/officers/babylyn.svg",
	},
	{
		name: "Claire",
		role: "CDG Officer",
		image: "/officers/claire.svg",
	},
	{
		name: "Clarence",
		role: "CDG Officer",
		image: "/officers/clarence.svg",
	},
	{
		name: "Dave",
		role: "CDG Officer",
		image: "/officers/dave.svg",
	},
	{
		name: "Elisha",
		role: "CDG Officer",
		image: "/officers/elisha.svg",
	},
	{
		name: "Franchescka",
		role: "CDG Officer",
		image: "/officers/franchescka.svg",
	},
	{
		name: "Gwyneth",
		role: "CDG Officer",
		image: "/officers/gwyneth.svg",
	},
	{
		name: "Jenny",
		role: "CDG Officer",
		image: "/officers/jenny.svg",
	},
	{
		name: "Keith",
		role: "CDG Officer",
		image: "/officers/keith.svg",
	},
	{
		name: "Llarie",
		role: "CDG Officer",
		image: "/officers/llarie.svg",
	},
	{
		name: "Myk",
		role: "CDG Officer",
		image: "/officers/myk.svg",
	},
	{
		name: "Newyeareign",
		role: "CDG Officer",
		image: "/officers/newyeareign.svg",
	},
	{
		name: "NG",
		role: "CDG Officer",
		image: "/officers/ng.svg",
	},
	{
		name: "Pia",
		role: "CDG Officer",
		image: "/officers/pia.svg",
	},
	{
		name: "Raine",
		role: "CDG Officer",
		image: "/officers/raine.svg",
	},
	{
		name: "Thel",
		role: "CDG Officer",
		image: "/officers/thel.svg",
	},
];

export default function OfficersSection() {
	return (
		<section className="reveal-up bg-background px-4 py-14 md:px-8 md:py-24">
			<div className="mx-auto max-w-7xl">
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
					<Button
						className="reveal-left mt-2 h-12.5 rounded-[100px] bg-primary px-6 text-xl font-normal text-primary-foreground hover:bg-primary/90"
						nativeButton={false}
						render={
							<Link href="/about">
								See More
								<ChevronRight className="ml-2 h-5 w-5" />
							</Link>
						}
					/>
				</div>

				<Carousel
					opts={{
						align: "start",
					}}
					className="mt-14"
				>
					<CarouselContent className="-ml-4 md:-ml-6">
						{officers.map((officer, idx) => (
							<CarouselItem
								key={`${officer.name}-${idx}`}
								className={cn(
									"pl-4 md:pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-68.5",
								)}
							>
								<article className="group relative overflow-hidden rounded-4xl h-100 w-full max-w-68.5 mx-auto">
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

					<div className="mt-12 flex items-center justify-center gap-6">
						<CarouselPrevious className="static size-10 translate-y-0 border-0 bg-card text-primary shadow-none hover:bg-muted disabled:bg-card disabled:text-primary/50" />
						<CarouselNext className="static size-10 translate-y-0 border-0 bg-primary text-primary-foreground shadow-none hover:bg-primary/90 disabled:bg-primary/50" />
					</div>
				</Carousel>
			</div>
		</section>
	);
}
