import type { Config } from 'vike/types'
import vikeReact from 'vike-react/config'
import Layout from '../layouts/LayoutDefault.js'

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  description: 'Demo showcasing Vike',

  extends: vikeReact,

  // https://vike.dev/Layout
  Layout,
  passToClient: ['user'],
  prerender: true,
  // https://vike.dev/head-tags
  title: 'My Vike App',
} satisfies Config
