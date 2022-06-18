import styles from './comment.module.scss'
import CommentForm from './CommentForm/CommentForm'
import CommentList from './CommentList/CommentList'
import AsyncBoundary from 'components/AsyncBoundary'

interface IProps {
  airportId: string
}

export default function Comment({ airportId }: IProps) {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>리뷰</h3>
      <AsyncBoundary>
        <CommentList airportId={airportId} />
        <CommentForm airportId={airportId} />
      </AsyncBoundary>
    </section>
  )
}
