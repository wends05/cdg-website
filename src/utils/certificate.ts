import { mockEvents, mockParticipants } from './mock-data'

export interface EventRecord {
  id: string
  name: string
  slug: string
  details: string
  imageUrl: string
  date: Date
}

export interface ParticipantRecord {
  id: string
  name: string
  email: string
}

// Mock database functions - replace with actual DB calls later
export async function getEventBySlug(
  slug: string,
): Promise<EventRecord | null> {
  // Simulate async DB call
  await new Promise((resolve) => setTimeout(resolve, 100))

  const event = mockEvents.find((e) => e.slug === slug)
  if (!event) return null

  return event
}

export async function getParticipantByEmail(
  email: string,
): Promise<ParticipantRecord | null> {
  // Simulate async DB call
  await new Promise((resolve) => setTimeout(resolve, 100))

  const participant = mockParticipants.find((p) => p.email === email)
  if (!participant) return null

  return participant
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function generateCertificateId(): string {
  return `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}
