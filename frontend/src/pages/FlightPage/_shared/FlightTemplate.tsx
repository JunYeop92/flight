import { ReactNode } from 'react'
import styles from './flightTemplate.module.scss'
import NowTime from './NowTime/NowTime'
import Refresh from './Refresh/Refresh'
import AsyncBoundary from 'components/AsyncBoundary'

interface IProps {
  children: ReactNode
}

export default function FlightTemplate({ children }: IProps) {
  return (
    <>
      <header className={styles.top}>
        <h2>오늘 운항 시간표</h2>
        <div className={styles.time}>
          <NowTime />
          <Refresh />
        </div>
      </header>
      <AsyncBoundary>{children}</AsyncBoundary>
    </>
  )
}
