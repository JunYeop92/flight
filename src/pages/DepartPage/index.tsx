import { Suspense } from 'react'
import Depart from './Depart'
import Loading from 'components/Loading/Loading'

export default function DepartPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Depart />
    </Suspense>
  )
}
