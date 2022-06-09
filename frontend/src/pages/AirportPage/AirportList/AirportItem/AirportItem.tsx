import { useState } from 'react'
import { CommentIcon, HeartIcon } from 'assets/svgs'
import styles from './airportItem.module.scss'
import { IAirportItem } from 'types/airport'
import AirportModal from './AirportModal/AirportModal'

interface IProps {
  data: IAirportItem
}

export default function AirportItem({ data }: IProps) {
  const { nameKo, likeCount, commentCount } = data
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => setIsOpen(true)
  const handleClickClose = () => setIsOpen(false)

  return (
    <>
      <li className={styles.wrapper}>
        <button type='button' onClick={handleClickOpen}>
          <div className={styles.title}>{nameKo}</div>

          <div className={styles.info}>
            <div className={styles.heart}>
              <HeartIcon />
              <span>{likeCount}</span>
            </div>
            <div className={styles.comment}>
              <CommentIcon />
              <span>{commentCount}</span>
            </div>
          </div>
        </button>
      </li>
      {isOpen && <AirportModal data={data} handleClickClose={handleClickClose} />}
    </>
  )
}
