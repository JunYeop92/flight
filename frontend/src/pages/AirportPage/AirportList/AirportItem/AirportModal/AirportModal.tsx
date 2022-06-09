import styles from './airportModal.module.scss'
import { IAirportItem } from 'types/airport'

import Portal from 'components/Portal'
import AirportTop from './AirportTop/AirportTop'
import AirportInfo from './AirportInfo/AirportInfo'
import Comment from './Comment/Comment'

interface IProps {
  data: IAirportItem
  handleClickClose: () => void
}

export default function AirportModal({ data, handleClickClose }: IProps) {
  const { _id, likeCount, name, nameKo, cityNameKo, countryNameKo } = data

  return (
    <Portal>
      <article className={styles.wrapper}>
        <AirportTop data={{ _id, likeCount }} handleClickClose={handleClickClose} />
        <AirportInfo data={{ name, nameKo, cityNameKo, countryNameKo }} />
        <hr />
        <Comment airportId={_id} />
      </article>
    </Portal>
  )
}
