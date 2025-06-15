import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'

export default {
  description: 'Demo showcasing Vike',
  extends: vikeReact,
  passToClient: ['user'],
  prerender: true,
  title: 'My Vike App',
} satisfies Config
