'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import type { EventRecord, ParticipantRecord } from '@/types/domain'
import { formatDate } from '@/utils/certificate'
import { CertificatePDF } from './certificate-pdf'

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false },
)

export function CertificateViewer({
  event,
  participant,
  certificateId,
}: {
  event: EventRecord
  participant: ParticipantRecord
  certificateId: string
}) {
  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-blue-600 text-center">
          Certificate of Attendance
        </h2>
        {/* Certificate preview mirrors PDF layout exactly */}
        <div className="relative overflow-hidden bg-white border border-gray-200 shadow-lg px-12 py-10 w-full max-w-[1200px] mx-auto">
          {/* Subtle brand shapes */}
          <div className="pointer-events-none absolute -left-10 top-10 h-24 w-24 rounded-full border-[6px] border-[#2f74e0]/20" />
          <div className="pointer-events-none absolute right-6 top-8 h-20 w-20 rotate-45 border-[5px] border-[#2f74e0]/15" />
          <div className="pointer-events-none absolute -bottom-6 left-1/3 h-20 w-20 rounded-full border-[6px] border-[#2f74e0]/12" />
          <div className="pointer-events-none absolute right-1/4 bottom-8 h-16 w-16 rotate-12 border-[5px] border-[#2f74e0]/12" />

          <div className="relative mb-6 flex items-center gap-4">
            <Image
              src="/logo_3.png"
              alt="Centralian Developer Group"
              width={96}
              height={96}
              className="h-24 w-24 max-h-24 max-w-24 object-contain drop-shadow-md"
              priority
            />
            <div className="leading-tight text-lg font-semibold text-gray-600">
              <span className="block">Centralian</span>
              <span className="block">Developer</span>
              <span className="block">Group</span>
            </div>
          </div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-600 mb-6">
            Certificate of Attendance
          </p>
          <hr className="border-t-2 border-blue-600 mb-8" />

          <h1 className="text-4xl font-black text-gray-900 mb-10 uppercase leading-tight">
            {event.name}
          </h1>

          <div className="space-y-1 mb-12">
            <p className="text-xl font-bold text-blue-600">
              {participant.name}
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Date:</span>{' '}
              {formatDate(event.date)}
            </p>
            <p className="text-sm text-gray-800">
              <span className="font-semibold">Email:</span> {participant.email}
            </p>
          </div>

          <hr className="border-t border-gray-200 mb-6" />

          <p className="text-xs font-semibold text-gray-700 mb-4">
            Certificate ID: {certificateId}
          </p>
          <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
            This certificate verifies that {participant.name} has successfully
            attended {event.name}. For more information about this course,
            please visit our website: https://cdg-website-mu.vercel.app/
          </p>
        </div>

        {/* About the event + download */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <div className="bg-white border border-gray-200 shadow-sm p-5 min-h-[220px] max-h-[260px] flex flex-col">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                About the Event
              </p>
              <div className="flex flex-col gap-1 text-gray-800 text-sm leading-relaxed">
                <p>
                  <span className="font-semibold">Name:</span> {event.name}
                </p>
                <p>
                  <span className="font-semibold">Date:</span>{' '}
                  {formatDate(event.date)}
                </p>
                <Link
                  href={`/events/${event.slug}`}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  See full event details
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4 self-stretch flex flex-col h-full">
            <div className="bg-white border border-gray-200 shadow-sm p-4 space-y-2">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Certificate Recipient
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {participant.name}
              </p>
              <p className="text-xs text-gray-700 break-all">
                {participant.email}
              </p>
            </div>
            <div className="bg-white border border-gray-200 shadow-sm p-4 flex-1 flex items-center">
              <PDFDownloadLink
                document={
                  <CertificatePDF
                    event={event}
                    participant={participant}
                    certificateId={certificateId}
                  />
                }
                fileName={`${event.slug}-${participant.email}-certificate.pdf`}
              >
                {({ loading }) => (
                  <Button
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {loading ? 'Generating PDF...' : 'Download Certificate'}
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
