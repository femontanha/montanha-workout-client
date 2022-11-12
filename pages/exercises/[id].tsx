import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next';

import { getExerciseById } from '../../lib/exercises'

const Exercise = (props) => {
  const router = useRouter()
  const { id } = router.query

  console.log(props);

  return (
    <div>
      <p>{props.exercise.id}</p>
      <p>{props.exercise.name}</p>
      <p>{props.exercise.reps}</p>
      <p>{props.exercise.sets}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const exercise = await getExerciseById(id);

  return {
    props: {
      exercise,
    },
  }
}

export default Exercise
