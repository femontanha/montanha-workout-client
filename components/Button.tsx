import styles from './Button.module.css'

const Button: React.FC = ({ children }) => (
  <button className={styles.button}>
    {children}
  </button>
)

export default Button
