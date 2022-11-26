import Head from 'next/head'
import { Container } from '../components/Container'
import styles from './Home.module.css'
import { FiAlertTriangle } from 'react-icons/fi'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>femontanha workout</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.painel}>
          <FiAlertTriangle className={styles.icon} />
          <span className={styles.text}>Nothing to do here ...</span>
        </div>
      </main>
    </Container>
  )
}

export default Home;
