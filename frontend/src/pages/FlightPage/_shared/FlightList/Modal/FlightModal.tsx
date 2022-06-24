import { useLocation } from 'react-router-dom'

import { EndIcon } from 'assets/svgs'
import styles from './flightModal.module.scss'
import { IFlightItem } from 'types/flight'

import Portal from 'components/Portal'
import Plane from './Plane/Plane'
import Destination from './Destination/Destination'
import DateTime from './DateTime/DateTime'
import InfoBox from './InfoBox/InfoBox'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useRef } from 'react'

interface IProps {
  item: IFlightItem
  handleClickClose: () => void
}

export default function FlightModal({ item, handleClickClose }: IProps) {
  const { estimatedDateTime, airport, airline, flightId, terminalId, gatenumber, elapsetime, remark, airportCode } =
    item
  const location = useLocation()
  const isDepart = !location.pathname.startsWith('/arrive')

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, handleClickClose)
  return (
    <Portal>
      <div className={styles.overlay}>
        <article className={styles.box} ref={ref}>
          <header className={styles.title}>
            <h3>운항 정보</h3>
            <button type='button' onClick={handleClickClose}>
              <EndIcon />
            </button>
          </header>

          <div className={styles.content}>
            <DateTime isDepart={isDepart} estimatedDateTime={estimatedDateTime} elapsetime={elapsetime} />
            <Plane />
            <Destination isDepart={isDepart} airport={airport} airportCode={airportCode} />
            <InfoBox data={{ airline, flightId, terminalId, gatenumber, remark }} />
          </div>
        </article>
      </div>
    </Portal>
  )
}
