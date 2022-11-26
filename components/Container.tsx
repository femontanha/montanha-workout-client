import styles from './Container.module.css'

type Props = {
  children: JSX.Element
}

export const Container: React.FC<Props> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)
