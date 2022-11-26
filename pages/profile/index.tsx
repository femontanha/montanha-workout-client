import Head from 'next/head'
import Image from 'next/image'
import { Container } from '../../components/Container'
import styles from './ProfilePage.module.css'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.profile}>
        <div className={styles.painel}>
          <Image
            className={styles.profilePic}
            src={'/femontanha.jpg'}
            alt={'femontanha profile picture'}
            width={540}
            height={540}
          />
          <p className={styles.profileName}>femontanha</p>
        </div>
      </div>
    </Container>
  )
}

export default ProfilePage
