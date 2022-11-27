import styles from './Header.module.css'

type Props = {
  title: string,
  children?: React.ReactNode,
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.content}>
        {props.children}
      </div>
    </header>
  )
}

export default Header
