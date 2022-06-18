import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'

import { UserIcon } from 'assets/svgs'
import styles from './commentForm.module.scss'
import { queryKeys } from 'utils'
import { addCommentApi } from 'services/comment'
import useAirportParams from 'hooks/useAirportParams'

interface IProps {
  airportId: string
}

export default function CommentForm({ airportId }: IProps) {
  const queryClient = useQueryClient()

  const { condition, search } = useAirportParams()
  const { mutate: addCommentMutate } = useMutation(addCommentApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.commentList(airportId))
      queryClient.invalidateQueries(queryKeys.airpostList(condition, search))
    },
  })

  const [nickName, setNickName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addCommentMutate({ airportId, nickName, content })
  }
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => setNickName(e.currentTarget.value)
  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.currentTarget.value)

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <div className={styles.user}>
        <UserIcon />
        <input type='text' placeholder='닉네임을 입력하세요.' value={nickName} onChange={handleChangeName} />
      </div>
      <div className={styles.content}>
        <textarea placeholder='댓글을 남겨보세요.' rows={1} value={content} onChange={handleChangeContent} />
        <button type='submit'>등록</button>
      </div>
    </form>
  )
}
