'use client'

import { useSession } from 'next-auth/react'
import { AuthPage } from '@/src/components/auth/auth-page'
import { SignoutButton } from '@/src/components/auth/signout-btn'

export default function CreateEventPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="p-6">Loading...</div>
  }

  if (status !== 'authenticated') {
    return <AuthPage />
  }

  return (
    <div className="p-6">
      <p className="text-lg font-semibold">Welcome, {session?.user?.name}</p>
      <div className="mt-4">
        <SignoutButton variant="secondary" size="sm" />
      </div>
    </div>
  )
}
