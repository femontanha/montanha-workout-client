import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'
import { GetStaticProps } from 'next';
import { getExercises } from '../lib/exercises';

const legs = [
  {
    name: 'Cadeira Flexora',
    sets: 3,
    reps: 12,
    weight: 59,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Mesa Flexora',
    sets: 3,
    reps: 12,
    weight: 45,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Cadeira Extensora',
    sets: 4,
    reps: 12,
    weight: 66,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Panturrilha Sentado',
    sets: 4,
    reps: 15,
    weight: 107,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Leg Press Sentado',
    sets: 3,
    reps: 15,
    weight: 127,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Cadeira Adutora',
    sets: 3,
    reps: 15,
    weight: 66,
    unit: 'kg',
    status: 'moderate',
  },
  {
    name: 'Cadeira Abdutora',
    sets: 3,
    reps: 15,
    weight: 66,
    unit: 'kg',
    status: 'moderate',
  },
];

export default function Home({ exercises }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha Workout</title>
        <meta name="description" content="Montanha Workout" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        { exercises.map(exercise => <Card key={exercise.name} exercise={exercise} />)}
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const exercises = await getExercises();
  console.log(exercises);
  return {
    props: {
      exercises
    },
    revalidate: 5,
  }
}
