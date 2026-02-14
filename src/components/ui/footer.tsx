import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Footer() {
	return (
		<footer className="bg-[#1f1f21] px-4 py-6 md:px-8 md:py-8">
			<div className="mx-auto max-w-7xl">
				<Card
					className="border-none bg-[#f4f5f7] py-0"
					style={{
						backgroundImage:
							"radial-gradient(ellipse at 20% 0%, rgba(59,130,246,0.07), transparent 58%), repeating-radial-gradient(circle at 70% 20%, rgba(148,163,184,0.16) 0, rgba(148,163,184,0.16) 1px, transparent 1px, transparent 11px)",
					}}
				>
					<CardContent className="flex flex-col items-center justify-center px-6 py-14 text-center">
						<Image
							src="/logo_1.svg"
							alt="CDG logo"
							width={48}
							height={30}
							className="mb-4 h-8 w-auto"
						/>
						<h3 className="text-4xl font-semibold leading-tight text-[#2f71f0] md:text-5xl">
							Be Part of a Community that
						</h3>
						<p className="mt-2 text-3xl leading-tight text-zinc-800 md:text-4xl">
							Learn, Connect, and Grow
						</p>
						<Link
							href="/apply"
							className="mt-5 inline-flex h-7 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
						>
							Join Now {">"}
						</Link>
					</CardContent>

					<CardFooter className="justify-center border-t border-zinc-300/90 bg-transparent px-4 py-4">
						<p className="text-center text-xs text-zinc-500 md:text-sm">
							© 2026 Centralian Developer Group - Central Philippine University.
							All rights reserved.
						</p>
					</CardFooter>
				</Card>
			</div>
		</footer>
	);
}
