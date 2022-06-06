import styles from './airportModal.module.scss'
import Modal from 'components/Modal/Modal'
import Comment from './Comment'

interface IProps {
  handleClickClose: () => void
}

export default function AirportModal({ handleClickClose }: IProps) {
  return (
    <Modal handleClickClose={handleClickClose}>
      <div className={styles.wrapper}>
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
      <Comment />
    </Modal>
  )
}
