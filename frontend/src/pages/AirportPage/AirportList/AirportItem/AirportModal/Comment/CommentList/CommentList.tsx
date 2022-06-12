import { useQuery } from 'react-query'
import styles from './commentList.module.scss'
import { queryKeys } from 'utils'
import { getCommentListApi } from 'services/comment'
import CommentItem from '../CommentItem/CommentItem'

interface IProps {
  airportId: string
}
export default function CommentList({ airportId }: IProps) {
  const { data } = useQuery(queryKeys.commentList(airportId), () => getCommentListApi(airportId), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return null
  return (
    <ul className={styles.wrapper}>
      {data.map((d) => (
        <CommentItem key={d._id} data={d} />
      ))}
    </ul>
  )
}
