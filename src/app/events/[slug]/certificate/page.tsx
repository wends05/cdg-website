import { CertificatePage } from "@/components/certificate/certificate-page"

export const metadata = {
  title: "Certificate | Centralian Developer Group",
  description: "View and download your completion certificate",
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{
    email?: string
  }>
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params
  const { email } = await searchParams

  return <CertificatePage slug={slug} email={email} />
}
