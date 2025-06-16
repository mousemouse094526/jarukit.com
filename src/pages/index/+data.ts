import { prisma } from '@/src/libs/prisma'

export type Data = Awaited<ReturnType<typeof data>>

export async function data() {
  console.debug('Fetching test data from Prisma...')
  const testData = await prisma.test.findMany()
  console.debug('testData', testData)
  return {
    testData,
  }
}
