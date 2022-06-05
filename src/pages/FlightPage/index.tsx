import { ReactNode, Suspense } from 'react'
import styles from './flightPage.module.scss'
import Loading from 'components/Loading/Loading'
import NowTime from 'components/NowTime'
import Refresh from 'components/Refresh/Refresh'

interface IProps {
  children: ReactNode
}

export default function FlightPage({ children }: IProps) {
  return (
    <>
      <div className={styles.top}>
        <h2>오늘 운항 시간표</h2>
        <div className={styles.time}>
          <NowTime />
          <Refresh />
        </div>
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  )
}
