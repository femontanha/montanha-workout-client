import styles from './Button.module.css'

type Props = {
  children: JSX.Element
}

const Button: React.FC<Props> = ({ children }: Props) => (
  <button className={styles.button}>
    {children}
  </button>
)

export default Button
