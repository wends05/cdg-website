import { notFound } from "next/navigation";
import { getEventBySlug } from "@/queries/events";
import { getParticipantByEmail } from "@/queries/participants";
import { CertificateViewer } from "./certificate-viewer";

interface CertificatePageProps {
	slug: string;
	email?: string;
}

export async function CertificatePage({ slug, email }: CertificatePageProps) {
	// Validate email is provided
	if (!email) {
		return notFound();
	}

	// Fetch event details by slug
	const event = await getEventBySlug(slug);
	if (!event || !event.id) {
		return notFound();
	}

	// Fetch participant details by email
	const participant = await getParticipantByEmail(email, event.id);
	if (!participant) {
		return notFound();
	}

	return <CertificateViewer event={event} participant={participant} />;
}
