import { UserIcon } from 'assets/svgs'
import dayjs from 'dayjs'
import { ICommentItem } from 'types/comment'
import styles from './commentItem.module.scss'

interface IProps {
  data: ICommentItem
}

export default function CommentItem({ data }: IProps) {
  const { nickName, date, content } = data
  const dayjsObj = dayjs(date)

  return (
    <li className={styles.wrapper}>
      <div className={styles.top}>
        <UserIcon />
        <div className={styles.nameBox}>
          <div className={styles.name}>{nickName}</div>
          <div className={styles.date}>
            {dayjsObj.format('YYYY')}년 {dayjsObj.format('MM')}월 {dayjsObj.format('DD')}일
          </div>
        </div>
      </div>
      <div className={styles.comment}>{content}</div>
    </li>
  )
}
