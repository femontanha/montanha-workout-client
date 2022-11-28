import Head from 'next/head'
import Link from 'next/link'
import Button from '../../components/Button'
import Header from '../../components/Header'
import { GetServerSideProps } from 'next'
import { IExercise, getExercises } from '../../lib/exercises'

import styles from './ExercisesPage.module.css'

type ExercisesPageProps = {
  exercises: []
}

const ExercisesPage: React.FC<ExercisesPageProps> = (props: ExercisesPageProps) => {
  return (
    <>
      <Head>
        <title>Exercises</title>
      </Head>
      <Header title="Exercises">
        <Link href="/exercises/create">
          <Button>Add New</Button>
        </Link>
      </Header>
      <div className={styles.page}>
        {props.exercises.map((exercise: IExercise) => (
          <Link key={exercise.id} href={{ pathname: '/exercises/[id]', query: { id: exercise.id } }} as="/exercises/[id]">
            <div className={styles.item}>
              <div className={styles.itemInfoLeft}>
                <p className={styles.name}>{exercise.name}</p>
                <p className={styles.type}>{exercise.type}</p>
              </div>
              <div className={styles.itemInfoRight}>
                <p className={styles.volume}>{exercise.sets} x {exercise.reps}</p>
                <p className={styles.status}>{exercise.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises
    },
  }
}

export default ExercisesPage
