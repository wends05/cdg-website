import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { CertificatePage } from "@/components/certificate/certificate-page";
import {
	getEventBySlugQueryOptions,
	getParticipantByEmailQueryOptions,
} from "@/lib/tanstack-query/query-options";

export const metadata = {
	title: "Certificate | Centralian Developer Group",
	description: "View and download your completion certificate",
};

interface PageProps {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{
		email?: string;
	}>;
}

export default async function Page({ params, searchParams }: PageProps) {
	const { slug } = await params;
	const { email } = await searchParams;

	if (!email) {
		notFound();
	}

	const queryClient = new QueryClient();

	const event = await queryClient.ensureQueryData(
		getEventBySlugQueryOptions(slug),
	);

	if (!event.id) {
		notFound();
	}

	const participant = await queryClient.ensureQueryData(
		getParticipantByEmailQueryOptions({
			email,
			eventId: event.id,
		}),
	);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CertificatePage event={event} participant={participant} />
		</HydrationBoundary>
	);
}
