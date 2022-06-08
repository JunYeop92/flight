import { useState } from 'react'
import { CommentIcon, HeartIcon } from 'assets/svgs'
import styles from './airportItem.module.scss'
import AirportModal from './AirportModal/AirportModal'
import { IAirportItem } from 'types/airport'

interface IProps {
  data: IAirportItem
}

export default function AirportItem({ data }: IProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => setIsOpen(true)
  const handleClickClose = () => setIsOpen(false)

  return (
    <>
      <li className={styles.wrapper}>
        <button type='button' onClick={handleClickOpen}>
          <div className={styles.title}>{data.nameKo}</div>

          <div className={styles.info}>
            <div className={styles.heart}>
              <HeartIcon />
              <span>{data.likeCount}</span>
            </div>
            <div className={styles.comment}>
              <CommentIcon />
              <span>3</span>
            </div>
          </div>
        </button>
      </li>
      {isOpen && <AirportModal data={data} handleClickClose={handleClickClose} />}
    </>
  )
}
