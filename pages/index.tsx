import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha Workout</title>
        <meta name="description" content="Montanha Workout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        { legs.map(exercise => <Card key={exercise.name} exercise={exercise} />)}
      </main>
    </div>
  )
}
