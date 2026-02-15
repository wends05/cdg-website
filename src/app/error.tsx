"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "@/components/ui/empty";
import { Item, ItemContent, ItemTitle } from "@/components/ui/item";

interface GlobalErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	const router = useRouter();

	useEffect(() => {
		console.error("Global app error:", error);
	}, [error]);

	return (
		<main className="flex min-h-screen items-center justify-center px-6">
			<Empty className="max-w-xl border border-dashed">
				<EmptyHeader className="space-y-4">
					<EmptyTitle>Something went wrong</EmptyTitle>
					<EmptyDescription>
						An unexpected error occurred while loading this page. You can try
						again or return to the home page.
					</EmptyDescription>
					<EmptyDescription className=" text-red-600 pb-5 text-md">
						{error.message}
					</EmptyDescription>
				</EmptyHeader>

				<EmptyContent className="flex-row justify-center">
					<Button onClick={reset}>Try again</Button>
					<Button onClick={() => router.back()}>Go back</Button>
					<Button onClick={() => router.push("/")} variant="outline">
						Go home
					</Button>
				</EmptyContent>
			</Empty>
		</main>
	);
}
