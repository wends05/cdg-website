import type { EventRecord, ParticipantRecord } from "@/types/domain";
import { CertificateViewer } from "./certificate-viewer";

interface CertificatePageProps {
	event: EventRecord;
	participant: ParticipantRecord;
}

export function CertificatePage({ event, participant }: CertificatePageProps) {
	return <CertificateViewer event={event} participant={participant} />;
}
