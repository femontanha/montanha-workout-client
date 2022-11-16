import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface IExercise {
  id: number;
  name: string;
  sets: number;
  reps: number;
  weight: number;
  unit: string;
  status: string;
  type: string;
}

export async function getExercises() {
  const exercises = await prisma.exercise.findMany();
  return exercises;
}

export async function getExerciseById(id: string) {
  const exercise = await prisma.exercise.findUnique({
    where: {
      id: parseFloat(id),
    },
  });
  return exercise;
}

export async function createExercise(data: IExercise) {
  const newEntry = await prisma.exercise.create({
    data,
  });
  return newEntry;
}

export async function updateExercise(data: IExercise) {
  const { id } = data;
  const newEntry = await prisma.exercise.update({
    where: { id },
    data,
  });
  return newEntry;
}
