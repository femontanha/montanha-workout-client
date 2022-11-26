import { GetServerSideProps } from 'next'
import { IRoutine, getRoutineByName } from '../../lib/routine'
import { IExercise } from '../../lib/exercises'
import ExerciseCard from '../../components/ExerciseCard'
import { Container } from '../../components/Container'

import styles from './RoutinePage.module.css'

type Props = {
  routine: IRoutine
}

const RoutinePage: React.FC<Props> = (props: Props) => {
  const { name, exercises } = props.routine

  return (
    <Container>
      <>
        <h1>{name}</h1>
        <div className={styles.grid}>
          {
            exercises.map((ex: IExercise) => (
              <ExerciseCard key={ex.id} exercise={ex} />
            ))
          }
        </div>
      </>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name = context?.params?.name;
  const routine = await getRoutineByName(name as string)
  return {
    props: {
      routine,
    },
  }
}

export default RoutinePage
