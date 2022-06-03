import { PlaneIcon } from 'assets/svgs'
import styles from './plane.module.scss'

export default function Plane() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.circle} />
      <div className={styles.line}>
        <div className={styles.iconBox}>
          <PlaneIcon />
        </div>
      </div>
      <div className={styles.circle} />
    </section>
  )
}
