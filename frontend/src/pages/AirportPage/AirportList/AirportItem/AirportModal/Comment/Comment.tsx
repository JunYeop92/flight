import { useQuery } from 'react-query'
import { getCommentListApi } from 'services/comment'
import { queryKeys } from 'types/common'
import styles from './comment.module.scss'
import CommentForm from './CommentForm/CommentForm'
import CommentItem from './CommentItem/CommentItem'

interface IProps {
  airportId: string
}

export default function Comment({ airportId }: IProps) {
  const { data } = useQuery(queryKeys.commentList(airportId), () => getCommentListApi(airportId), {
    suspense: true,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  })

  if (!data) return null
  return (
    <div className={styles.wrapper}>
      <h3>댓글 {data.length} &#62;</h3>
      <ul>
        {data.map((d) => (
          <CommentItem key={d._id} data={d} />
        ))}
      </ul>
      <CommentForm airportId={airportId} />
    </div>
  )
}
