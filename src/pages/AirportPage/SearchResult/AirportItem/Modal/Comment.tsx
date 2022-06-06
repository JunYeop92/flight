import styles from './comment.module.scss'
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
      {/* <form>
        <input type='text' placeholder='닉네임을 입력하세요.' />
        <textarea placeholder='댓글을 남겨보세요.' />
      </form> */}
    </div>
  )
}
