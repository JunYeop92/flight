import { UserIcon } from 'assets/svgs'
import styles from './commentItem.module.scss'

export default function CommentItem() {
  return (
    <li className={styles.wrapper}>
      <div className={styles.top}>
        <UserIcon />
        <div className={styles.nameBox}>
          <div className={styles.name}>미륀전갈</div>
          <div className={styles.date}>2022년 6월 6일</div>
        </div>
      </div>
      <div className={styles.comment}>설레는 공항</div>
    </li>
  )
}
