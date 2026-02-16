'use client'

import { ReactNode } from 'react'

interface AccessModalProps {
  children: ReactNode
  title?: string
}

export function AccessModal({
  children,
  title = 'Access Required',
}: AccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-yellow-400/10 rounded-full" />
        <div className="absolute top-1/3 right-8 w-2 h-2 bg-blue-500" />
        <div className="absolute bottom-1/4 left-8 w-3 h-3 border-2 border-yellow-400" />

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600 text-sm mb-8">
            Enter your access code to continue
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}
