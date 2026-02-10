import { notFound } from 'next/navigation'
import { CertificateViewer } from './certificate-viewer'
import { getEventBySlug, getParticipantByEmail } from '@/utils/certificate'


interface CertificatePageProps {
  slug: string
  email?: string
}

export async function CertificatePage({ slug, email }: CertificatePageProps) {
  // Validate email is provided
  if (!email) {
    return notFound()
  }

  // Fetch event details by slug
  const event = await getEventBySlug(slug)
  if (!event) {
    return notFound()
  }

  // Fetch participant details by email
  const user = await getParticipantByEmail(email)
  if (!user) {
    return notFound()
  }

  return <CertificateViewer event={event} user={user} />
}
