import styles from './title.module.scss'
import logo from 'assets/logo/ia.jpg'

export default function Title() {
  return (
    <h1 className={styles.title}>
      <img src={logo} alt='incheon-airport' />
      인천공항
    </h1>
  )
}
