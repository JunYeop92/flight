import styles from './airportModal.module.scss'
import Comment from './Comment'
import Portal from 'components/Portal'
import { EndIcon, HeartIcon } from 'assets/svgs'
import { IAirportItem } from 'types/airport'

interface IProps {
  data: IAirportItem
  handleClickClose: () => void
}

export default function AirportModal({ data, handleClickClose }: IProps) {
  return (
    <Portal>
      <article className={styles.wrapper}>
        <div className={styles.top}>
          <button type='button' className={styles.heart} onClick={handleClickClose}>
            <HeartIcon />
            <span>20</span>
          </button>

          <button type='button' className={styles.close} onClick={handleClickClose}>
            <EndIcon />
          </button>
        </div>
        <div className={styles.info}>
          <h2>
            <span>{data.nameKo}</span>
            <span>({data.name})</span>
          </h2>
          <dl>
            <div>
              <dt>도시</dt>
              <dd>{data.cityNameKo}</dd>
            </div>
            <div>
              <dt>나라</dt>
              <dd>{data.countryNameKo}</dd>
            </div>
          </dl>
        </div>
        <hr />
        <Comment />
      </article>
    </Portal>
  )
}
