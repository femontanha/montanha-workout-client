import styles from './InputText.module.css'

const InputText = (props: any) => (
  <input type="text" className={styles.input} {...props} />
)

export default InputText
