import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      is_admin?: boolean
    }
  }

  interface User {
    is_admin?: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    is_admin?: boolean
  }
}
