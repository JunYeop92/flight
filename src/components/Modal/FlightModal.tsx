import styles from './flightModal.module.scss'
import Portal from 'components/Portal'
import { IFlightItem } from 'types/flight'
import dayjs from 'dayjs'
import { EndIcon, PlaneIcon } from 'assets/svgs'

interface IProps {
  item: IFlightItem
  handleClickClose: () => void
}

export default function FlightModal({ item, handleClickClose }: IProps) {
  const { estimatedDateTime, airport, airline, flightId, terminalId, gatenumber, elapsetime, remark } = item

  // 시작시간
  const startHourStr = estimatedDateTime.slice(0, 2)
  const startMinStr = estimatedDateTime.slice(2, 4)
  const startDayObj = dayjs(new Date().setHours(Number(startHourStr), Number(startMinStr)))

  // 소요시간 더해서 종료시간
  const elapseHourStr = elapsetime?.slice(0, 2)
  const elapseMinStr = elapsetime?.slice(2, 4)
  const endDayobj = startDayObj.add(Number(elapseHourStr), 'hour').add(Number(elapseMinStr), 'minute')

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
            <div className={styles.date}>
              <div className={styles.start}>{startDayObj.format('MM.DD')}</div>
              <div className={styles.end}>{endDayobj.format('MM.DD')}</div>
            </div>
            <div className={styles.time}>
              <div className={styles.start}>
                {startHourStr}:{startMinStr}
              </div>
              <div className={styles.lead}>
                {elapseHourStr}h {elapseMinStr}m
              </div>
              <div className={styles.end}>{endDayobj.format('HH:mm')}</div>
            </div>

            <div className={styles.plane}>
              <div className={styles.circle} />
              <div className={styles.line}>
                <div className={styles.iconBox}>
                  <PlaneIcon />
                </div>
              </div>
              <div className={styles.circle} />
            </div>

            <div className={styles.destination}>
              <div className={styles.start}>인천</div>
              <div className={styles.end}>{airport}</div>
            </div>

            <div className={styles.info}>
              <div className={styles.terminal}>
                <div>{terminalId}</div>
                <div>터미널</div>
              </div>
              <div className={styles.gate}>
                <div>{gatenumber}</div>
                <div>게이트</div>
              </div>
              <div className={styles.state}>
                <div>{remark}</div>
                <div>운항현황</div>
              </div>
            </div>

            <div className={styles.info2}>
              <div className={styles.terminal}>
                <div>{airline}</div>
                <div>항공사</div>
              </div>
              <div className={styles.gate}>
                <div>{flightId}</div>
                <div>편명</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Portal>
  )
}
