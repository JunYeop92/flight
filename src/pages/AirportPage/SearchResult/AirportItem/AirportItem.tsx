import { useState } from 'react'
import { CommentIcon, HeartIcon } from 'assets/svgs'
import styles from './airportItem.module.scss'
import AirportModal from './AirportModal/AirportModal'

export default function AirportItem() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => setIsOpen(true)
  const handleClickClose = () => setIsOpen(false)

  return (
    <>
      <li className={styles.wrapper}>
        <button type='button' onClick={handleClickOpen}>
          <div className={styles.title}>간사이 국제 공항</div>

          <div className={styles.info}>
            <div className={styles.heart}>
              <HeartIcon />
              <span>20</span>
            </div>
            <div className={styles.comment}>
              <CommentIcon />
              <span>3</span>
            </div>
          </div>
        </button>
      </li>
      {isOpen && <AirportModal handleClickClose={handleClickClose} />}
    </>
  )
}
