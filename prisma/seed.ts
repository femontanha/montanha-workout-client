import { exercises } from './exercises'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  for (let exercise of exercises) {
    await prisma.exercise.create({
      data: exercise
    })
  }
}

main().catch(e => {
  console.log(e)
  process.exit(1)
}).finally(() => {
  prisma.$disconnect()
})
