import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainNav from '../components/MainNav'

import styles from './App.module.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.app}>
      <Component {...pageProps} />
      <MainNav />
    </div>
  );
}
