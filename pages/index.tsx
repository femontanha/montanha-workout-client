import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha Workout</title>
        <meta name="description" content="Montanha Workout" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.cdnfonts.com/css/menlo" rel="stylesheet"></link>
      </Head>

      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}

export default Home;
