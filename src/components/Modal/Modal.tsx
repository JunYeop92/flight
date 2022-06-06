import styles from './modal.module.scss'
import { EndIcon } from 'assets/svgs'
import Portal from 'components/Portal'

interface IProps {
  children: React.ReactNode
  handleClickClose: () => void
}

export default function Modal({ children, handleClickClose }: IProps) {
  return (
    <Portal>
      <article className={styles.overlay}>
        <button type='button' className={styles.backBtn} onClick={handleClickClose} aria-label='outside-button' />
        <div className={styles.box}>
          <div className={styles.title}>
            <h3>운항 정보</h3>
            <button type='button' onClick={handleClickClose}>
              <EndIcon />
            </button>
          </div>

          <div className={styles.content}>{children}</div>
        </div>
      </article>
    </Portal>
  )
}
