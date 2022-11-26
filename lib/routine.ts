import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface IRoutine {
  id: number;
  name: string;
  exercises: [];
}

export async function getRoutineName() {
  const routineName = await prisma.routine.findMany({
    select: {
      name: true,
    },
  })

  return routineName
}

export async function getRoutine() {
  const routine = await prisma.routine.findMany({
    include: {
      exercises: true,
    },
  });
  return routine
}

export async function getRoutineByName(name: string) {
  const routine = await prisma.routine.findFirst({
    where: {
      name,
    },
    include: {
      exercises: true,
    },
  })

  return routine
}
