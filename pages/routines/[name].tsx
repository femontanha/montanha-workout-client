import Link from 'next/link'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { IRoutine, getRoutineByName } from '../../lib/routine'
import { IExercise } from '../../lib/exercises'
import Header from '../../components/Header'
import ExerciseCard from '../../components/ExerciseCard'
import { Container } from '../../components/Container'

import styles from './RoutinePage.module.css'

type Props = {
  routine: IRoutine
}

const RoutinePage: React.FC<Props> = (props: Props) => {
  const { name, exercises } = props.routine

  return (
    <>
      <Head>
        <title>Routines</title>
      </Head>
      <Header title={name}>
        <Link href="/routines">Back</Link>
      </Header>
      <div className={styles.page}>
        {
          exercises.map((ex: IExercise) => (
            <div key={ex.id} className={styles.item}>
              <div className={styles.itemInfoLeft}>
                <p className={styles.name}>{ex.name}</p>
                <p className={styles.type}>{ex.type}</p>
              </div>
              <div className={styles.itemInfoRight}>
                <p className={styles.volume}>{ex.sets} x {ex.reps}</p>
                <p className={styles.status}>{ex.status}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
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
