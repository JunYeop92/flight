import styles from './airportModal.module.scss'
import Comment from './Comment'
import Portal from 'components/Portal'
import { EndIcon, HeartIcon } from 'assets/svgs'

interface IProps {
  handleClickClose: () => void
}

export default function AirportModal({ handleClickClose }: IProps) {
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
            <span>간사이 국제공항</span>
            <span>(Kansai International Airport)</span>
          </h2>
          <dl>
            <div>
              <dt>도시</dt>
              <dd>오사카/간사이</dd>
            </div>
            <div>
              <dt>나라</dt>
              <dd>일본</dd>
            </div>
          </dl>
        </div>
        <hr />
        <Comment />
      </article>
    </Portal>
  )
}
