import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { cx } from 'styles'
import { EndIcon, PlaneIcon } from 'assets/svgs'
import styles from './flightModal.module.scss'

import { IFlightItem } from 'types/flight'
import getCalcTime from './getCalcTime'
import Portal from 'components/Portal'

interface IProps {
  item: IFlightItem
  handleClickClose: () => void
}

export default function FlightModal({ item, handleClickClose }: IProps) {
  const { estimatedDateTime, airport, airline, flightId, terminalId, gatenumber, elapsetime, remark } = item
  const [isDepart, setIsDepart] = useState(true)
  const { startDayObj, endDayObj, elapseTimeStr } = getCalcTime(isDepart, estimatedDateTime, elapsetime)
  const location = useLocation()

  useEffect(() => {
    setIsDepart(!location.pathname.startsWith('/arrive'))
  }, [location])

  return (
    <Portal>
      <article className={styles.overlay}>
        <button type='button' className={styles.backBtn} onClick={handleClickClose} aria-label='outside-button' />
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>운항 정보</h3>
            <button type='button' onClick={handleClickClose}>
              <EndIcon />
            </button>
          </div>

          <div className={styles.content}>
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

            <section className={styles.plane}>
              <div className={styles.circle} />
              <div className={styles.line}>
                <div className={styles.iconBox}>
                  <PlaneIcon />
                </div>
              </div>
              <div className={styles.circle} />
            </section>

            <section className={styles.destination}>
              <div className={styles.start}>인천</div>
              <div className={styles.end}>{airport}</div>
            </section>

            <section className={styles.infoBox}>
              <div className={styles.info}>
                <div>{terminalId}</div>
                <div>터미널</div>
              </div>
              <div className={styles.info}>
                <div>{gatenumber}</div>
                <div>게이트</div>
              </div>
              <div className={styles.info}>
                <div>{remark || ' '}</div>
                <div>운항현황</div>
              </div>
            </section>

            <section className={cx(styles.infoBox, styles.airBox)}>
              <div className={cx(styles.info, styles.air)}>
                <div>{airline}</div>
                <div>항공사</div>
              </div>
              <div className={cx(styles.info, styles.air)}>
                <div>{flightId}</div>
                <div>편명</div>
              </div>
            </section>
          </div>
        </div>
      </article>
    </Portal>
  )
}
