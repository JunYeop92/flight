import styles from './nowTime.module.scss'
import useTimeInterval from 'hooks/useTimeInterval'

export default function NowTime() {
  const time = useTimeInterval(1000, 'HH:mm:ss')

  return <div className={styles.wrapper}>현재 시각 : {time}</div>
}
