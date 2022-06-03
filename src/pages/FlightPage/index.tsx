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
        <NowTime />
        <Refresh />
      </div>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  )
}
