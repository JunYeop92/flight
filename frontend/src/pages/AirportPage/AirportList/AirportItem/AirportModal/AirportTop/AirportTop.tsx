import styles from './airportTop.module.scss'
import { EndIcon, HeartIcon } from 'assets/svgs'
import { IIncLikeParam } from 'types/airport'
import useIncLikeMutation from 'hooks/useIncLikeMutation'

interface IProps {
  data: IIncLikeParam
  handleClickClose: () => void
}

export default function AirportTop({ data, handleClickClose }: IProps) {
  const { _id, likeCount } = data
  const { mutate: incLikeMutate } = useIncLikeMutation()
  const handleClickLike = () => incLikeMutate({ _id, likeCount: likeCount + 1 })

  return (
    <div className={styles.wrapper}>
      <button type='button' className={styles.heart} onClick={handleClickLike}>
        <HeartIcon />
        <span>{likeCount}</span>
      </button>
      <button type='button' className={styles.close} onClick={handleClickClose}>
        <EndIcon />
      </button>
    </div>
  )
}
