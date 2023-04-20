import { PrismaClient, Prisma } from '@prisma/client'

export async function example() {
  const prisma = new PrismaClient()
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: "1",
      },
    })
    return user
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}