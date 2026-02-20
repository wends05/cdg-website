"use client";

import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import type { EventRecord, ParticipantRecord } from "@/types/domain";
import { formatDate } from "@/utils/certificate";
import logo from "@/../public/logo_2.png";

const styles = StyleSheet.create({
	page: {
		padding: 48,
		backgroundColor: "#FFFFFF",
		fontFamily: "Helvetica",
	},
	header: {
		marginBottom: 28,
		paddingBottom: 18,
		borderBottomWidth: 2,
		borderBottomColor: "#2563EB",
	},
	logo: {
		marginBottom: 10,
		height: 110,
		width: 110,
	},
	certificateLabel: {
		fontSize: 10,
		color: "#4B5563",
		fontWeight: "bold",
		letterSpacing: 2,
		textTransform: "uppercase",
		marginBottom: 15,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		color: "#111827",
		marginBottom: 28,
		lineHeight: 1.3,
	},
	recipientName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#2563EB",
		marginTop: 4,
		marginBottom: 6,
	},
	details: {
		fontSize: 11,
		color: "#1F2937",
		marginBottom: 4,
	},
	detailLabel: {
		fontWeight: "bold",
	},
	certificateId: {
		fontSize: 10,
		color: "#4B5563",
		marginTop: 18,
		paddingTop: 14,
		borderTopWidth: 1,
		borderTopColor: "#E5E7EB",
	},
	footerText: {
		fontSize: 10,
		color: "#4B5563",
		marginTop: 10,
		lineHeight: 1.45,
	},
});

export function CertificatePDF({
	event,
	participant,
 	certificateId,
}: {
	event: EventRecord;
	participant: ParticipantRecord;
 	certificateId: string;
}) {
	return (
		<Document>
			<Page size="A4" style={styles.page} orientation="landscape">
				{/* Header */}
				<View style={styles.header}>
					<Image src={logo.src} style={styles.logo} />
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
					<Text style={styles.detailLabel}>Certificate ID: {certificateId}</Text>
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
