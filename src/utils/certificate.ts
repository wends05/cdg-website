export interface EventRecord {
  id: string;
  name: string;
  slug: string;
  details: string;
  imageUrl: string;
  date: Date;
}

export interface ParticipantRecord {
  id: string;
  name: string;
  email: string;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function generateCertificateId(): string {
  return `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
