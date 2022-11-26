import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import classNames from 'classnames/bind'  
import { Container } from '../../components/Container'
import Header from '../../components/Header'
import { GetStaticProps } from 'next'
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
      <Header title="Exercises" />
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

export const getStaticProps: GetStaticProps = async () => {
  const exercises = await getExercises();
  return {
    props: {
      exercises
    },
    revalidate: 5,
  }
}

export default ExercisesPage
