import styles from './comment.module.scss'
import CommentForm from './CommentForm'
import CommentItem from './CommentItem'

export default function Comment() {
  return (
    <div className={styles.wrapper}>
      <h3>댓글 3 &#62;</h3>
      <ul>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </ul>
      <CommentForm />
    </div>
  )
}
