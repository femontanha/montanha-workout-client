import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'
import { GetStaticProps } from 'next';
import { getExercises } from '../lib/exercises';

type HomeProps = {
  exercises: []
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha Workout</title>
        <meta name="description" content="Montanha Workout" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        { props.exercises.map((card, i) => <Card key={i} card={card} />)}
      </main>
    </div>
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

export default Home;
