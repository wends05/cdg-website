'use client'

import { FormEvent, useState } from 'react'
import { AccessCodeInput } from './access-code-input'

interface AuthFormProps {
  onSubmit?: (accessCode: string) => void
  isLoading?: boolean
  error?: string | null
}

export function AuthForm({
  onSubmit,
  isLoading = false,
  error,
}: AuthFormProps) {
  const [accessCode, setAccessCode] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (accessCode.trim()) {
      onSubmit?.(accessCode)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <AccessCodeInput
        value={accessCode}
        onChange={setAccessCode}
        placeholder="Enter your access code"
      />

      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={!accessCode.trim() || isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
      >
        {isLoading ? 'Verifying...' : 'Confirm Access'}
      </button>

      <p className="text-xs text-gray-500 text-center">
        Your access code is case-sensitive
      </p>
    </form>
  )
}
