import { NextApiRequest, NextApiResponse } from 'next'
import { getExercises, createExercise } from '../../lib/exercises'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'POST') {
    return await create(req, res)
  } else if (method === 'GET') {
    return await getExercise(req, res)
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false })
  }
}

async function getExercise(req: NextApiRequest, res: NextApiResponse) {
  try {
    const exercises = await getExercises()
    return res.status(200).json({
      data: exercises,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Error reading from database', success: false })
  }
}

async function create(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    console.log('body', body);
    const newEntry = await createExercise(body)
    return res.status(200).json({
      data: newEntry,
    })
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating exercise', success: false })
  }
}

// data: {
//   name: body.name,
//   sets: body.sets,
//   reps: body.reps,
//   weight: body.weight,
//   unit: body.unit,
//   status: body.status,
//   type: body.type,
// }
