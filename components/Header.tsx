import styles from './Header.module.css'

type Props = {
  title: string,
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
    </header>
  )
}

export default Header
