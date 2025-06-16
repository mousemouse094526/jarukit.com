import { prisma } from '@/src/libs/prisma'

function testSeed() {
  return prisma.test.createMany({
    data: [
      { description: 'This is a test 1', name: 'Test 1' },
      { description: 'This is a test 2', name: 'Test 2' },
      { description: 'This is a test 3', name: 'Test 3' },
    ],
    skipDuplicates: true,
  })
}

export { testSeed }
