import styles from './destination.module.scss'

interface IProps {
  isDepart: boolean
  airport: string
}

export default function Destination({ isDepart, airport }: IProps) {
  return (
    <section className={styles.wrapper}>
      <div>{isDepart ? '인천' : airport}</div>
      <div>{isDepart ? airport : '인천'}</div>
    </section>
  )
}
