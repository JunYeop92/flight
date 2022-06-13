import { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ErrorComponent from './ErrorComponent/ErrorComponent'
import Loading from './Loading/Loading'

interface IProps {
  children: ReactNode
}

export default function AsyncBoundary({ children }: IProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorComponent}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrorBoundary>
  )
}
