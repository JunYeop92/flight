import cx from 'classnames'
import styles from './infoBox.module.scss'

interface IData {
  airline: string
  flightId: string
  terminalId: string
  gatenumber: string
  remark: string
}

interface IProps {
  data: IData
}

export default function InfoBox({ data }: IProps) {
  const { airline, flightId, terminalId, gatenumber, remark } = data

  return (
    <>
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
    </>
  )
}
