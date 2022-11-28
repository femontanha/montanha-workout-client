import { GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { getRoutineName, IRoutine } from '../../lib/routine'
import { Container } from '../../components/Container'
import Header from '../../components/Header'
import { AiOutlineFund } from 'react-icons/ai'

import styles from './RoutinesPage.module.css'

type RoutinesPage = {
  routines: []
}

const RoutinesPage: React.FC<RoutinesPage> = (props: RoutinesPage) => {
  return (
    <>
        <Head>
          <title>Routines</title>
        </Head>
        <Header title="Routines" />
        <Container>
          <p className={styles.text}>
            Discover and choose your daily routine
          </p>
          {props.routines.map((r: IRoutine) => (
            <div className={styles.painel} key={r.name}>
              <AiOutlineFund className={styles.icon} />
              <Link className={styles.link} href={{ pathname: '/routines/[name]', query: { name: r.name } }} as="/routines/[name]">
                <button className={styles.button}>
                    {r.name} training
                </button>
              </Link>
            </div>
          ))}
        </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const routines = await getRoutineName()
  return {
    props: {
      routines,
    },
  }
}

export default RoutinesPage
