import { Suspense } from 'react'
import styles from './comment.module.scss'
import Loading from 'components/Loading/Loading'
import CommentForm from './CommentForm/CommentForm'
import CommentList from './CommentList/CommentList'

interface IProps {
  airportId: string
}

export default function Comment({ airportId }: IProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>리뷰</h3>
      <Suspense fallback={<Loading />}>
        <CommentList airportId={airportId} />
        <CommentForm airportId={airportId} />
      </Suspense>
    </div>
  )
}
