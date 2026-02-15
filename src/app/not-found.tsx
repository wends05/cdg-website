"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CDGLogo from "@/../public/cdg-main-logo-center.png";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
	const router = useRouter();

	return (
		<main className="flex min-h-[60vh] items-center justify-center px-6 h-screen flex-col">
			<Image src={CDGLogo} alt="CDG Logo" width={200} height={200} />
			<Empty className="max-w-xl border border-dashed max-h-max">
				<EmptyHeader>
					<EmptyTitle>Page not found</EmptyTitle>
					<EmptyDescription>
						The page you’re looking for doesn’t exist or may have been moved.
					</EmptyDescription>
				</EmptyHeader>

				<EmptyContent className="flex-row justify-center">
					<Button onClick={() => router.back()}>Go back</Button>
					<Button onClick={() => router.push("/")} variant="outline">
						Go home
					</Button>
				</EmptyContent>
			</Empty>
		</main>
	);
}
