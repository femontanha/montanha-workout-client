import Head from 'next/head'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>femontanha workout</title>
      </Head>
      <main className={styles.main}>
        Home
      </main>
    </div>
  )
}

export default Home;
