import devServer from '@hono/vite-dev-server'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { telefunc } from 'telefunc/vite'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'
import vercel from 'vite-plugin-vercel'

export default defineConfig({
  build: {
    target: 'es2022',
  },
  plugins: [
    vike(),
    devServer({
      entry: 'hono-entry.ts',

      exclude: [
        /^\/@.+$/,
        /.*\.(ts|tsx|vue)($|\?)/,
        /.*\.(s?css|less)($|\?)/,
        /^\/favicon\.ico$/,
        /.*\.(svg|png)($|\?)/,
        /^\/(public|assets|static)\/.+/,
        /^\/node_modules\/.*/,
      ],

      injectClientScript: false,
    }),
    react({}),
    tailwindcss(),
    telefunc(),
    vercel(),
  ],

  vercel: {
    additionalEndpoints: [
      {
        // replaces default Vike target
        destination: 'ssr_',
        // already added by default Vike route
        route: false,
        // entry file to the server. Default export must be a node server or a function
        source: 'hono-entry.ts',
      },
    ],
  },
})
