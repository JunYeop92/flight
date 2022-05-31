import FlightModal from 'components/Modal/FlightModal'
import { useState } from 'react'
import { IFlightItem } from 'types/flight'
import styles from './flightItem.module.scss'

interface IProps {
  item: IFlightItem
}

export default function FlightItem({ item }: IProps) {
  const { estimatedDateTime, airport, airline, terminalId, gatenumber } = item
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOpen = () => setIsOpen(true)
  const handleClickClose = () => setIsOpen(false)

  return (
    <>
      <li className={styles.wrapper}>
        <button type='button' onClick={handleClickOpen}>
          <div className={styles.t1}>
            {estimatedDateTime.slice(0, 2)}:{estimatedDateTime.slice(2, 4)}
          </div>
          <div className={styles.t2}>{airport}</div>
          <div className={styles.t3}>{airline}</div>
          <div className={styles.t4}>{terminalId}</div>
          <div className={styles.t5}>{gatenumber}</div>
        </button>
      </li>
      {isOpen && <FlightModal item={item} handleClickClose={handleClickClose} />}
    </>
  )
}
