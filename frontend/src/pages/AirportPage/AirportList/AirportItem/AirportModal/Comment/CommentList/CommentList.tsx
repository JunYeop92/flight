import { useQuery } from 'react-query'
import styles from './commentList.module.scss'
import { queryKeys } from 'utils'
import { getCommentListApi } from 'services/comment'
import CommentItem from '../CommentItem/CommentItem'

interface IProps {
  airportId: string
}
export default function CommentList({ airportId }: IProps) {
  const { data = [] } = useQuery(queryKeys.commentList(airportId), () => getCommentListApi(airportId))

  return (
    <ul className={styles.wrapper}>
      {data.map((d) => (
        <CommentItem key={d._id} data={d} />
      ))}
    </ul>
  )
}
