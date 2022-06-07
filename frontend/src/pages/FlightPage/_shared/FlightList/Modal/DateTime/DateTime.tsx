import cx from 'classnames'
import styles from './dateTime.module.scss'
import { getCalcTime } from 'utils'

interface IProps {
  isDepart: boolean
  estimatedDateTime: string
  elapsetime: string
}

export default function DateTime({ isDepart, estimatedDateTime, elapsetime }: IProps) {
  const { startDayObj, endDayObj, elapseTimeStr } = getCalcTime(isDepart, estimatedDateTime, elapsetime)

  return (
    <>
      <section className={styles.date}>
        <div>{startDayObj ? startDayObj.format('MM.DD') : ' '}</div>
        <div>{endDayObj ? endDayObj.format('MM.DD') : ' '}</div>
      </section>

      <section className={styles.time}>
        <div className={cx(styles.start, { [styles.active]: isDepart })}>
          {startDayObj ? startDayObj.format('HH:mm') : ' '}
        </div>
        <div className={styles.lead}>{elapseTimeStr}</div>
        <div className={cx(styles.end, { [styles.active]: !isDepart })}>
          {endDayObj ? endDayObj.format('HH:mm') : ' '}
        </div>
      </section>
    </>
  )
}
