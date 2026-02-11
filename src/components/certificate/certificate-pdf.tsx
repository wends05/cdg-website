"use client";

import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { EventRecord, ParticipantRecord } from "@/types/domain";
import { formatDate, generateCertificateId } from "@/utils/certificate";

const styles = StyleSheet.create({
	page: {
		padding: 40,
		backgroundColor: "#FFFFFF",
		fontFamily: "Helvetica",
	},
	header: {
		marginBottom: 30,
		paddingBottom: 20,
		borderBottomWidth: 2,
		borderBottomColor: "#0052FF",
	},
	logo: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#0052FF",
		marginBottom: 10,
	},
	certificateLabel: {
		fontSize: 10,
		color: "#666666",
		fontWeight: "bold",
		letterSpacing: 2,
		marginBottom: 15,
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: "#000000",
		marginBottom: 20,
		lineHeight: 1.3,
	},
	recipientName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#0052FF",
		marginTop: 20,
		marginBottom: 5,
	},
	details: {
		fontSize: 11,
		color: "#333333",
		marginBottom: 3,
	},
	detailLabel: {
		fontWeight: "bold",
	},
	certificateId: {
		fontSize: 9,
		color: "#999999",
		marginTop: 20,
		paddingTop: 15,
		borderTopWidth: 1,
		borderTopColor: "#EEEEEE",
	},
	footerText: {
		fontSize: 9,
		color: "#666666",
		marginTop: 10,
		lineHeight: 1.5,
	},
});

export function CertificatePDF({
	event,
	participant,
}: {
	event: EventRecord;
	participant: ParticipantRecord;
}) {
	const certId = generateCertificateId();

	return (
		<Document>
			<Page size="A4" style={styles.page} orientation="landscape">
				{/* Header */}
				<View style={styles.header}>
					<Text style={styles.logo}>CDG</Text>
					<Text style={styles.certificateLabel}>CERTIFICATE OF COMPLETION</Text>
				</View>

				{/* Certificate Title */}
				<Text style={styles.title}>{event.name}</Text>

				{/* Recipient Info */}
				<Text style={styles.recipientName}>{participant.name}</Text>
				<Text style={styles.details}>
					<Text style={styles.detailLabel}>Date: </Text>
					{formatDate(event.date)}
				</Text>
				<Text style={styles.details}>
					<Text style={styles.detailLabel}>Email: </Text>
					{participant.email}
				</Text>

				{/* Footer Info */}
				<View style={styles.certificateId}>
					<Text style={styles.detailLabel}>{certId}</Text>
					<Text style={styles.footerText}>
						This certificate verifies that {participant.name} successfully
						completed {event.name}. The certificate indicates the entire course
						was completed as validated by the participant. For more information
						about this course, please visit our website.
					</Text>
				</View>
			</Page>
		</Document>
	);
}
