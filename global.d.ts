/* eslint-disable ts/consistent-type-definitions */
import type { Session } from '@auth/core/types'

declare global {
  namespace Vike {
    interface PageContext {
      session?: Session | null
    }
  }
}

export {}
