import dayjs from 'dayjs'
import { useSetRecoilState } from 'recoil'
import { fromTimeState } from 'recoil/atom'
import { RefreshIcon } from 'assets/svgs'
import styles from './refresh.module.scss'

export default function Refresh() {
  const setFromTime = useSetRecoilState(fromTimeState)

  const handleClick = () => setFromTime(dayjs().format('HHmm'))

  return (
    <button type='button' className={styles.refreshBtn} onClick={handleClick}>
      <RefreshIcon />
    </button>
  )
}
