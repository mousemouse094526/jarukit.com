import { createHandler, createMiddleware } from '@universal-middleware/hono'

import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { authjsHandler, authjsSessionMiddleware } from '@/src/server/authjs-handler'
import { telefuncHandler } from '@/src/server/telefunc-handler'
import { vikeHandler } from '@/src/server/vike-handler'

const app = new Hono()

app.use(createMiddleware(authjsSessionMiddleware)())

/**
 * Auth.js route
 * @link {@see https://authjs.dev/getting-started/installation}
 */
app.use('/api/auth/**', createHandler(authjsHandler)())

app.post('/_telefunc', createHandler(telefuncHandler)())

/**
 * Vike route
 *
 * @link {@see https://vike.dev}
 */
app.all('*', createHandler(vikeHandler)())

export const GET = handle(app)

export const POST = handle(app)

export default process.env.VERCEL === '1' ? undefined : app
