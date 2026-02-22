import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "Events", href: "/events" },
	{ name: "Contact", href: "/contact" },
];

export default function Footer() {
	return (
		<div>
			{/* Upper Footer */}
			<section className="relative isolate flex min-h-130 items-center justify-center overflow-hidden bg-background px-6 py-20 text-foreground md:min-h-155">
				<Image
					src="/footer-graphic.svg"
					fill
					alt="Footer image"
					className=" object-fill scale-x-110"
				/>

				<div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
					<div className="relative h-20 w-32 sm:h-24 sm:w-36">
						<Image
							src="/logo_1.svg"
							alt="Centralian Developer Group logo"
							fill
							sizes="(max-width: 640px) 128px, 144px"
							className="object-contain"
						/>
					</div>

					<h2 className="font-display mt-4 text-3xl font-medium tracking-tight text-primary sm:text-4xl md:text-[64px]">
						Be Part of a community that
					</h2>
					<p className="mt-2 text-xl font-medium text-foreground sm:text-2xl">
						Learn, Connect, and Grow
					</p>

					<Button
						nativeButton={false}
						render={
							<Link href="https://forms.gle/i8cn5thQXQF9CzMZ7">
								Join Now
								<span>
									<ChevronRight />
								</span>
							</Link>
						}
						className="mt-7 rounded-full bg-blue-500 px-6 text-xl font-semibold text-primary-foreground hover:bg-primary/90 h-12.5"
					/>
				</div>
			</section>

			{/* Lower Footer */}
			<footer className="relative overflow-hidden bg-black to-[#081030] bg-linear-to-t text-white">
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				/>
				<div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-6 py-14 sm:px-10 md:py-16 lg:justify-end lg:mt-20">
					<div className="grid gap-16 md:gap-12 md:grid-cols-[1.4fr_1fr_1fr] mt-12 md:mt-0 text-center md:text-left">
						<div className="space-y-4 flex flex-col items-center md:items-start">
							<div className="flex items-center justify-center md:justify-start gap-4 md:gap-6">
								<div className="relative w-30.5 h-17.75 lg:h-27.25 lg:w-46.5 shrink-0">
									<Image
										src="/logo_1.svg"
										alt="Centralian Developer Group logo"
										fill
										className="object-contain object-center md:object-left"
									/>
								</div>
								<p className="text-[20px] lg:text-[30px] leading-tight font-medium font-sans text-left">
									Centralian
									<br />
									Developer
									<br />
									Group
								</p>
							</div>
						</div>

						<div className="flex flex-col items-center md:items-start">
							<h2 className="text-[20px] font-semibold text-white">
								Quick Links
							</h2>
							<ul className="mt-4 flex flex-col gap-2.5 items-center md:items-start">
								{quickLinks.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-[16px] md:text-xl text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081030]"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className="flex flex-col items-center md:items-start">
							<h2 className="text-[20px] font-semibold text-white">
								Contact Us
							</h2>
							<div className="mt-4 flex flex-col gap-5 md:gap-2.5 text-[16px] md:text-[18px] text-white items-center md:items-start">
								<div className="flex flex-col items-center md:items-start md:flex-row md:gap-1">
									<p>Email:</p>
									<a
										href="mailto:gdsc.cpu.ph@gmail.com"
										className="hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081030]"
									>
										gdsc.cpu.ph@gmail.com
									</a>
								</div>
								<div className="flex flex-col items-center md:items-start md:flex-row md:gap-1">
									<p>Messenger:</p>
									<p>Centralian Developer Group - CPU</p>
								</div>
								<div className="flex flex-col items-center md:items-start md:flex-row md:gap-1">
									<p>Phone:</p>
									<p>+63 912-345-6789</p>
								</div>
								<div className="flex flex-col items-center md:items-start md:flex-row md:gap-1">
									<p>Tel No.:</p>
									<p>123-4567</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row pt-16 justify-center">
						<p className="text-[12px] md:text-[16px] text-white text-center">
							© 2026 Centralian Developer Group. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
