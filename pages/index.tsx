import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montanha&apos;s Workout</title>
      </Head>
      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}

export default Home;
