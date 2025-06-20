import { prisma } from '@/src/libs/prisma'

async function seedData() {
  console.log('Seeding data...')
  const testData = await prisma.test.findMany()
  console.debug('testData', testData)
  // await testSeed()
  console.debug('Data seeding completed.')
}

seedData()
