"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
	{ label: "Home", href: "/" },
	{ label: "Events", href: "/events" },
	{ label: "Contact", href: "/contact" },
] as const;

function isActive(pathname: string, href: string) {
	if (href.includes("#")) return false;

	const hrefWithoutHash = href.split("#")[0];
	const normalizedHref = hrefWithoutHash.split("?")[0];

	return pathname === normalizedHref;
}

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
			<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				{/* LEFT: Hamburger (mobile) + BIG logo */}
				<div className="flex flex-1 items-center justify-between md:w-auto md:flex-none md:justify-start">
					<Link href="/" className="flex shrink-0 items-center">
						<span className="sr-only">Centralian Developer Group</span>

						{/* BIG logo like your screenshot */}
						<div className="relative h-4 w-22 sm:h-10 sm:w-36 md:h-14 md:w-78">
							<Image
								src="/logo_1.svg"
								alt="Centralian Developer Group logo"
								fill
								priority
								sizes="150px"
								className="object-contain object-left scale-100"
							/>
						</div>
					</Link>

					<button
						onClick={() => setIsMenuOpen((v) => !v)}
						className="flex flex-col gap-1 md:hidden"
						aria-label="Toggle navigation menu"
					>
						<span className="h-0.5 w-6 bg-foreground transition" />
						<span className="h-0.5 w-6 bg-foreground transition" />
						<span className="h-0.5 w-6 bg-foreground transition" />
					</button>

					{/* MIDDLE: Nav links */}
					<div className="hidden md:flex items-center md:-ml-30">
						<ul className="flex items-center gap-14">
							{navigation.map(({ label, href }) => {
								const active = isActive(pathname, href);

								return (
									<li key={label} className="relative">
										<Link
											href={href}
											className={[
												"text-base font-semibold transition-colors",
												active
													? "text-primary"
													: "text-foreground hover:text-primary",
											].join(" ")}
										>
											{label}
										</Link>

										{active && (
											<span className="absolute -bottom-3 left-0 h-1 w-full rounded-full bg-primary" />
										)}
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* RIGHT: Social icons */}
				<div className="hidden md:flex items-center gap-8">
					<a
						href="https://www.facebook.com/centraliandeveloper"
						className="text-primary hover:text-primary/80 transition-colors"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
							<title>Facebook</title>
							<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
						</svg>
					</a>

					<a
						href="https://www.linkedin.com/company/centralian-developer-group-cpu/"
						className="text-primary hover:text-primary/80 transition-colors"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
							<title>LinkedIn</title>
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
						</svg>
					</a>
				</div>
			</nav>

			{/* Mobile dropdown */}
			{isMenuOpen && (
				<div className="md:hidden border-t border-border bg-card">
					<nav className="flex flex-col gap-4 px-6 py-4">
						{navigation.map(({ label, href }) => (
							<Link
								key={label}
								href={href}
								className="text-sm font-medium text-foreground hover:text-primary transition-colors"
								onClick={() => setIsMenuOpen(false)}
							>
								{label}
							</Link>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
