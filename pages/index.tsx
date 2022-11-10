import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha Workout</title>
        <meta name="description" content="Montanha Workout" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Card />
      </main>
    </div>
  )
}
