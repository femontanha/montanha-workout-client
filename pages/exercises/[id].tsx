import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

import { IExercise, getExerciseById } from '../../lib/exercises'

const Exercise = ({ exercise }: { exercise: IExercise }) => {
  const router = useRouter()
  const { id } = router.query

  console.log(exercise);

  return (
    <div>
      <p>{exercise.id}</p>
      <p>{exercise.name}</p>
      <p>{exercise.reps}</p>
      <p>{exercise.sets}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const exercise = await getExerciseById(id as string);

  return {
    props: {
      exercise,
    },
  }
}

export default Exercise
