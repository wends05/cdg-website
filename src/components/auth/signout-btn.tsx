'use client'

import { useState } from 'react'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

interface SignoutButtonProps {
  variant?: 'primary' | 'secondary' | 'minimal'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

export function SignoutButton({
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
}: SignoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignout = async () => {
    setIsLoading(true)
    await signOut({ callbackUrl: '/events/admin' })
  }

  const baseClasses =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed'

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm gap-2',
    md: 'px-4 py-2.5 text-base gap-2',
    lg: 'px-6 py-3 text-lg gap-2',
  }

  const variantClasses = {
    primary:
      'bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm hover:shadow-md',
    secondary:
      'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg',
    minimal:
      'text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-200',
  }

  return (
    <button
      onClick={handleSignout}
      disabled={isLoading || disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      aria-label="Sign out"
    >
      <LogOut size={size === 'sm' ? 16 : size === 'md' ? 20 : 24} />
      <span>{isLoading ? 'Signing out...' : 'Sign out'}</span>
    </button>
  )
}
