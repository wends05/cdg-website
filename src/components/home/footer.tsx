import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const quickLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Teams", href: "/teams" },
	{ name: "Events", href: "/events" },
];

export default function Footer() {
	return (
		<div>
			{/* Upper Footer */}
			<section
				className="relative isolate flex min-h-130 items-center justify-center overflow-hidden bg-background px-6 py-20 text-foreground md:min-h-155"
			>
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
						render={<Link href="https://forms.gle/i8cn5thQXQF9CzMZ7">Join Now &gt;</Link>}
						className="mt-7 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 h-12.5"
					/>
				</div>
			</section>

			{/* Lower Footer */}
			<footer className="relative overflow-hidden bg-black to-[#081030] bg-linear-to-t text-white lg:h-101.75">
				<div
					aria-hidden="true"
					className="absolute inset-0 bg-center bg-cover bg-no-repeat"
				/>
				<div className="relative mx-auto flex h-full w-full max-w-7xl flex-col px-6 py-14 sm:px-10 md:py-16 lg:justify-end lg:py-20">
					<div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
						<div className="space-y-4">
							<div className="flex items-center gap-4">
								<div className="relative h-16 w-20 shrink-0 sm:h-20 sm:w-24">
									<Image
										src="/logo_1.svg"
										alt="Centralian Developer Group logo"
										fill
										sizes="(max-width: 640px) 80px, 96px"
										className="object-contain"
									/>
								</div>
								<p className="max-w-55 text-3xl leading-tight font-medium font-sans">
									Centralian Developer Group
								</p>
							</div>
						</div>

						<div>
							<h2 className="text-xl font-semibold tracking-wide text-secondary-foreground/90 uppercase">
								Quick Links
							</h2>
							<ul className="mt-4 space-y-2.5">
								{quickLinks.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-lg text-secondary-foreground/75 transition-colors hover:text-secondary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-xl font-semibold tracking-wide text-secondary-foreground/90 uppercase">
								Contact Us
							</h2>
							<div className="mt-4 space-y-2.5 text-lg text-secondary-foreground/75">
								<p>
									<span className="text-secondary-foreground/90">Email:</span>{" "}
									<a
										href="mailto:cdg.cpu.ph@gmail.com"
										className="underline decoration-secondary-foreground/25 underline-offset-4 transition-colors hover:text-secondary-foreground hover:decoration-secondary-foreground/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
									>
										cdg.cpu.ph@gmail.com
									</a>
								</p>
								<p>
									<span className="text-secondary-foreground/90">
										Messenger:
									</span>
									Centralian Developer Group - CPU
								</p>
								<p>
									<span className="text-secondary-foreground/90">Phone:</span>{" "}
									+63 912-345-6789
								</p>
								<p>
									<span className="text-secondary-foreground/90">Tel No:</span>{" "}
									123-4567
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-4 sm:flex-row pt-12 justify-center">
						<p className="text-xs text-secondary-foreground/65 sm:text-sm">
							© 2026 Centralian Developer Group. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
