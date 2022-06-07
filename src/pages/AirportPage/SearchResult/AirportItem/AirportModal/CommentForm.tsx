import { UserIcon } from 'assets/svgs'
import styles from './commentForm.module.scss'

export default function CommentForm() {
  return (
    <form className={styles.wrapper}>
      <div className={styles.user}>
        <UserIcon />
        <input type='text' placeholder='닉네임을 입력하세요.' />
      </div>
      <div className={styles.content}>
        <textarea placeholder='댓글을 남겨보세요.' rows={1} />
        <button type='submit'>등록</button>
      </div>
    </form>
  )
}
