import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './MainNav.module.css'
import { IoIosFitness } from 'react-icons/io'
import { BsListTask } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'

const MainNav: React.FC = () => {
  const router = useRouter()
  console.log(router.pathname)

  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={router.pathname == "/exercises" ? styles.linkActive : styles.link} href="/exercises">
            <IoIosFitness />
            <span className={styles.itemName}>Exercises</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={router.pathname == "/routines" ? styles.linkActive : styles.link} href="/routines">
            <BsListTask />
            <span className={styles.itemName}>Routines</span>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={router.pathname == "/profile" ? styles.linkActive : styles.link} href="/exercises">
            <BiUser />
            <span className={styles.itemName}>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav
