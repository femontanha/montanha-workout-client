import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'
import MainNav from '../components/MainNav'

import styles from './App.module.css'

export default function App({ Component, pageProps }: AppProps) {
  const [ isLoading, setIsLoading ] = useState(true)
  const router = useRouter()

  useEffect(() => {
    router.isReady && setIsLoading(false)
  }, [router.isReady])

  const MyComponent = () => (
    <div className={styles.app}>
      <Component {...pageProps} />
      <MainNav />
    </div>
  )

  const Loading = () => (
    <div className={styles.loading}>
      <ReactLoading type={'spin'} color={'#FFF'} />
    </div>
  )
  // console.log('Xablau')
  return (
    <>
      { isLoading ? <Loading /> : <MyComponent /> }
    </>
  );
}
