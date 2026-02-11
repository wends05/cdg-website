'use client'

import dynamic from 'next/dynamic'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CertificatePDF } from './certificate-pdf'
import { formatDate, generateCertificateId } from '@/utils/certificate'
import { EventRecord, ParticipantRecord } from '@/types/domain'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
)

export function CertificateViewer({
  event,
  participant,
}: {
  event: EventRecord
  participant: ParticipantRecord
}) {
  const certId = generateCertificateId()

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 py-8 px-4">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-2 border-blue-500 opacity-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border-2 border-yellow-400 opacity-10 transform rotate-45" />
      <div className="absolute top-1/2 right-20 w-16 h-16 border-4 border-blue-500 opacity-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Certificate</h1>
          <p className="text-gray-600">of Completion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Certificate Display */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-12 bg-white border-4 border-gray-100">
                {/* Certificate Header */}
                <div className="text-center mb-12 pb-8 border-b-2 border-blue-500">
                  <p className="text-sm font-bold text-gray-500 tracking-widest mb-4">
                    CERTIFICATE OF COMPLETION
                  </p>
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">CDG</span>
                    </div>
                  </div>
                </div>

                {/* Event Name */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                    {event.name}
                  </h2>
                </div>

                {/* Recipient Info */}
                <div className="text-center mb-12">
                  <p className="text-sm text-gray-600 mb-2">
                    This certificate is presented to
                  </p>
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">
                    {participant.name}
                  </h3>
                  <p className="text-sm text-gray-600">{participant.email}</p>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-2 gap-8 mb-12 pb-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-xs text-gray-600 font-semibold mb-1">
                      DATE
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      {formatDate(event.date)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600 font-semibold mb-1">
                      CERTIFICATE ID
                    </p>
                    <p className="text-sm font-semibold text-gray-900 font-mono">
                      {certId.substring(0, 12)}...
                    </p>
                  </div>
                </div>

                {/* Footer Message */}
                <div className="text-center">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    This certificate verifies that{' '}
                    <span className="font-semibold">{participant.name}</span> has
                    successfully completed{' '}
                    <span className="font-semibold">{event.name}</span>. The
                    certificate indicates the entire event was completed as
                    validated by the participant.
                  </p>
                </div>

                {/* Decorative accent */}
                <div className="flex justify-center gap-2 mt-8">
                  <div className="w-8 h-1 bg-yellow-400" />
                  <div className="w-1 h-1 bg-blue-500 rounded-full" />
                  <div className="w-8 h-1 bg-blue-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* Recipient Card */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                Certificate Recipient
              </p>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {participant.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{participant.name}</h4>
                  <p className="text-sm text-gray-600 break-all">
                    {participant.email}
                  </p>
                </div>
              </div>
            </div>

            {/* About the Event */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                About the Event
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {event.details}
              </p>
              <div className="text-xs text-gray-600 space-y-2">
                <p>
                  <span className="font-semibold">Event Date:</span>{' '}
                  {formatDate(event.date)}
                </p>
              </div>
            </div>

            {/* Download Button */}
            <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border border-blue-200">
              <PDFDownloadLink
                document={<CertificatePDF event={event} participant={participant} />}
                fileName={`${event.slug}-${participant.email}-certificate.pdf`}
              >
                {({ loading }) => (
                  <Button
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {loading ? 'Generating PDF...' : 'Download Certificate'}
                  </Button>
                )}
              </PDFDownloadLink>
              <p className="text-xs text-gray-600 text-center mt-3">
                Save your certificate as PDF for your records
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
