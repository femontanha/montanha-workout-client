import { NextApiRequest, NextApiResponse } from 'next'
import { getExercises, createExercise, updateExercise } from '../../lib/exercises'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      return await getExercise(req, res);
    case 'POST':
      return await create(req, res);
    case 'PUT':
      return await update(req, res);
      break
    case 'DELETE':
      break
    default:
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

async function update(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body
  try {
    const newEntry = await updateExercise(body);
    return res.status(200).json(newEntry);
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
