'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface AccessCodeInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function AccessCodeInput({
  value,
  onChange,
  placeholder = 'Enter access code',
}: AccessCodeInputProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
        autoComplete="off"
      />
      {/* Show/Hide password toggle */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 p-1"
        aria-label={showPassword ? 'Hide access code' : 'Show access code'}
      >
        {showPassword ? (
          <EyeOff className="w-5 h-5" />
        ) : (
          <Eye className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}
