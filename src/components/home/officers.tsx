"use client";

import Image from "next/image";
import Link from "next/link";
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
    <section className="reveal-up  px-4 py-14 md:px-8 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="px-2 md:px-4">
          <h2 className="reveal-left text-4xl font-semibold text-[#2f71f0] md:text-6xl">
            Meet the CDG Officers
          </h2>
          <p className="reveal-left mt-2 max-w-4xl text-lg text-zinc-800">
            Get to know the dedicated student leaders who guide our
            organization, support our members, and bring our vision to life.
          </p>
          <Link
            href="/about"
            className="reveal-left mt-4 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            See More {">"}
          </Link>
        </div>

        <Carousel
          opts={{
						align: "start",
          }}
          className="mt-14"
        >
          <CarouselContent>
            {officers.map((officer, idx) => (
              <CarouselItem
                key={`${officer.name}-${idx}`}
                className={cn(
                  "basis-full transition-[transform, opacity] duration-300 sm:basis-1/2 md:basis-1/3 lg:basis-1/6",
                )}
              >
                <article className="group relative overflow-hidden rounded-3xl">
                  <Image
                    src={officer.image}
                    alt={officer.name}
                    width={260}
                    height={330}
                    className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex items-center justify-center gap-3">
            <CarouselPrevious className="static size-10 translate-y-0 border-0 bg-white text-[#2f71f0] shadow-none hover:bg-[#eef3ff] disabled:bg-white disabled:text-[#89aef6]" />
            <CarouselNext className="static size-10 translate-y-0 border-0 bg-[#2f71f0] text-white shadow-none hover:bg-[#285fcb] disabled:bg-[#89aef6]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
