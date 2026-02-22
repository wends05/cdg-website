import type { EventRecord, ParticipantRecord } from "@/types/domain";
import { generateCertificateId } from "@/utils/certificate";
import { CertificateViewer } from "./certificate-viewer";

interface CertificatePageProps {
	event: EventRecord;
	participant: ParticipantRecord;
}

export function CertificatePage({ event, participant }: CertificatePageProps) {
	const certId = `CERT-${event.id}-${participant.id}`;

	return (
		<CertificateViewer
			event={event}
			participant={participant}
			certificateId={certId}
		/>
	);
}
