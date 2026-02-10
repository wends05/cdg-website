import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        accesscode: {
          label: 'Access Code',
          type: 'text',
          placeholder: 'accesscode',
        },
      },
      async authorize(credentials) {
        if (!process.env.ACCESS_CODE) {
          throw new Error('Access code is not configured.')
        }
        const accessCode = credentials?.accesscode
        if (accessCode === process.env.ACCESS_CODE) {
          return { id: 'admin', name: 'Admin', is_admin: true }
        } else {
          return null
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userid = user.id
        token.name = user.name
        token.is_admin = (user as { is_admin?: boolean }).is_admin ?? false
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name
        session.user.is_admin = token.is_admin as boolean
      }

      return session
    },
  },
}
