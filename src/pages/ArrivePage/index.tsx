import Loading from 'components/Loading/Loading'
import { Suspense } from 'react'
import Arrive from './Arrive'

export default function ArrivePage() {
  return (
    <Suspense fallback={<Loading />}>
      <Arrive />
    </Suspense>
  )
}
