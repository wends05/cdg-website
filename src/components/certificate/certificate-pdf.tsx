'use client'

import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import type { EventRecord, ParticipantRecord } from '@/types/domain'
import { formatDate } from '@/utils/certificate'
import logo from '@/../public/logo_3.png'

const styles = StyleSheet.create({
  page: {
    padding: 48,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  canvas: {
    position: 'relative',
    width: '100%',
  },
  header: {
    marginBottom: 16,
    paddingBottom: 0,
  },
  shapeCircleLarge: {
    position: 'absolute',
    top: 12,
    left: -110,
    height: 100,
    width: 100,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#d9e5fb',
    opacity: 0.42,
  },
  shapeDiamond: {
    position: 'absolute',
    top: 15,
    right: 36,
    height: 92,
    width: 92,
    borderWidth: 4,
    borderColor: '#d9e5fb',
    transform: 'rotate(45deg)',
    opacity: 0.46,
  },
  shapeCircleBottom: {
    position: 'absolute',
    bottom: -55,
    left: 280,
    height: 80,
    width: 80,
    borderRadius: 52,
    borderWidth: 4,
    borderColor: '#d9e5fb',
    opacity: 0.45,
  },
  shapeSquareBottom: {
    position: 'absolute',
    bottom: -30,
    right: 160,
    height: 65,
    width: 65,
    borderWidth: 4,
    borderColor: '#d9e5fb',
    transform: 'rotate(12deg)',
    opacity: 0.45,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 14,
  },
  logo: {
    height: 96,
    width: 96,
    objectFit: 'contain',
  },
  logoText: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight: 600,
    lineHeight: 1.1,
  },
  certificateLabel: {
    fontSize: 10,
    color: '#4B5563',
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 28,
    lineHeight: 1.3,
  },
  recipientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
    marginTop: 4,
    marginBottom: 6,
  },
  details: {
    fontSize: 11,
    color: '#1F2937',
    marginBottom: 4,
  },
  detailLabel: {
    fontWeight: 'bold',
  },
  certificateId: {
    fontSize: 10,
    color: '#4B5563',
    marginTop: 18,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  footerText: {
    fontSize: 10,
    color: '#4B5563',
    marginTop: 10,
    lineHeight: 1.45,
  },
  rule: {
    height: 2,
    backgroundColor: '#2f74e0',
    marginTop: 12,
    marginBottom: 28,
    width: '100%',
  },
  sectionGap: {
    marginBottom: 28,
  },
})

export function CertificatePDF({
  event,
  participant,
  certificateId,
}: {
  event: EventRecord
  participant: ParticipantRecord
  certificateId: string
}) {
  return (
    <Document>
      <Page size="A4" style={styles.page} orientation="landscape">
        <View style={styles.canvas}>
          <View style={styles.shapeCircleLarge} />
          <View style={styles.shapeDiamond} />
          <View style={styles.shapeCircleBottom} />
          <View style={styles.shapeSquareBottom} />

          {/* Header */}
          <View style={styles.header}>
            <View style={styles.logoRow}>
              <Image src={logo.src} style={styles.logo} />
              <Text style={styles.logoText}>
                Centralian{'\n'}Developer{'\n'}Group
              </Text>
            </View>
            <Text style={styles.certificateLabel}>
              CERTIFICATE OF ATTENDANCE
            </Text>
          </View>

          <View style={styles.rule} />

          {/* Certificate Title */}
          <Text style={[styles.title, styles.sectionGap]}>{event.name}</Text>

          {/* Recipient Info */}
          <Text style={styles.recipientName}>{participant.name}</Text>
          <Text style={styles.details}>
            <Text style={styles.detailLabel}>Date: </Text>
            {formatDate(event.date)}
          </Text>
          <Text style={[styles.details, styles.sectionGap]}>
            <Text style={styles.detailLabel}>Email: </Text>
            {participant.email}
          </Text>

          {/* Footer Info */}
          <View style={styles.certificateId}>
            <Text style={styles.detailLabel}>
              Certificate ID: {certificateId}
            </Text>
            <Text style={styles.footerText}>
              This certificate verifies that {participant.name} has successfully
              attended {event.name}. For more information about this course,
              please visit our website: https://cdg-website-mu.vercel.app/
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}
