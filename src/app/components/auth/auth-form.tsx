'use client'

import { useForm } from '@tanstack/react-form'
import { AccessCodeInput } from './access-code-input'

interface AuthFormProps {
  onSubmit?: (accessCode: string) => Promise<void> | void
  error?: string | null
}

export function AuthForm({ onSubmit, error }: AuthFormProps) {
  const form = useForm<{ accesscode: string }>({
    defaultValues: {
      accesscode: '',
    },
    onSubmit: async ({ value }) => {
      await onSubmit?.(value.accesscode)
    },
  })

  if (form.state.isSubmitting) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        event.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-6"
    >
      <form.Field
        name="accesscode"
        validators={{
          onChange: ({ value }) =>
            !value.trim() ? 'Access code is required.' : undefined,
        }}
      >
        {(field) => (
          <div className="space-y-2">
            <AccessCodeInput
              value={field.state.value}
              onChange={(value) => field.handleChange(value)}
              placeholder="Enter your access code"
            />
            {field.state.meta.errors?.length ? (
              <p className="text-sm text-red-600" role="alert">
                {field.state.meta.errors[0]}
              </p>
            ) : null}
          </div>
        )}
      </form.Field>

      {error ? (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            {isSubmitting ? 'Verifying...' : 'Confirm Access'}
          </button>
        )}
      </form.Subscribe>

      <p className="text-xs text-gray-500 text-center">
        Your access code is case-sensitive
      </p>
    </form>
  )
}
