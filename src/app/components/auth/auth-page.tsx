'use client'

import { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { AccessModal } from './access-modal'
import { AuthForm } from './auth-form'

export function AuthPage() {
  const { status } = useSession()
  const router = useRouter()
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/events/admin/create')
    }
  }, [status, router])

  const handleSubmit = async (accessCode: string) => {
    setErrorMessage(null)
    const result = await signIn('credentials', {
      accesscode: accessCode,
      redirect: false,
    })

    if (result?.ok) {
      router.replace('/events/admin/create')
      return
    }

    if (result?.error === 'CredentialsSignin') {
      setErrorMessage('Invalid access code. Please try again.')
    } else if (result?.error) {
      setErrorMessage(result.error)
    } else {
      setErrorMessage('Unable to sign in. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 border-2 border-blue-200 rounded-full opacity-30" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 border-2 border-yellow-200 rounded-full opacity-20" />
        <div className="absolute top-20 left-1/4 w-px h-40 bg-gradient-to-b from-blue-300 to-transparent opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-px bg-gradient-to-r from-yellow-300 to-transparent opacity-40" />
        <div className="absolute top-1/3 right-10 w-6 h-6 border-2 border-blue-300 transform rotate-45 opacity-40" />
        <div className="absolute bottom-1/4 left-10 w-4 h-4 border-2 border-yellow-300 transform rotate-45 opacity-50" />
        <div className="absolute top-1/4 right-1/3 w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-blue-200 opacity-30" />
      </div>

      <AccessModal>
        <AuthForm onSubmit={handleSubmit} error={errorMessage} />
      </AccessModal>
    </div>
  )
}
