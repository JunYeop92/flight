import { useLocation } from 'react-router-dom'

import { EndIcon } from 'assets/svgs'
import styles from './flightModal.module.scss'
import { IFlightItem } from 'types/flight'

import Portal from 'components/Portal'
import Plane from './Plane/Plane'
import Destination from './Destination/Destination'
import DateTime from './DateTime/DateTime'
import InfoBox from './InfoBox/InfoBox'

interface IProps {
  item: IFlightItem
  handleClickClose: () => void
}

export default function FlightModal({ item, handleClickClose }: IProps) {
  const { estimatedDateTime, airport, airline, flightId, terminalId, gatenumber, elapsetime, remark, airportCode } =
    item
  const location = useLocation()
  const isDepart = !location.pathname.startsWith('/arrive')

  return (
    <Portal>
      <article className={styles.overlay}>
        <button type='button' className={styles.backBtn} onClick={handleClickClose} aria-label='outside-close-button' />
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>운항 정보</h3>
            <button type='button' onClick={handleClickClose}>
              <EndIcon />
            </button>
          </div>

          <div className={styles.content}>
            <DateTime isDepart={isDepart} estimatedDateTime={estimatedDateTime} elapsetime={elapsetime} />
            <Plane />
            <Destination isDepart={isDepart} airport={airport} airportCode={airportCode} />
            <InfoBox data={{ airline, flightId, terminalId, gatenumber, remark }} />
          </div>
        </div>
      </article>
    </Portal>
  )
}
