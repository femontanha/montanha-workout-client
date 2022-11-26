import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { getRoutineName, IRoutine } from '../../lib/routine'
import { Container } from '../../components/Container'
import Header from '../../components/Header'

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
          <p>
            Discover the routines we have to provided the best training for you
          </p>
          {props.routines.map((r: IRoutine) => (
            <div key={r.name}>
              <Link className={styles.link} href={{ pathname: '/routine/[name]', query: { name: r.name } }} as="/routine/[name]">
                {r.name}
              </Link>
            </div>
          ))}
        </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const routines = await getRoutineName()
  return {
    props: {
      routines,
    },
  }
}

export default RoutinesPage
