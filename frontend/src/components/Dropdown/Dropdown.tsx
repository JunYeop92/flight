import { useRef, useState } from 'react'
import cx from 'classnames'
import { CaretDownIcon } from 'assets/svgs'
import styles from './dropdown.module.scss'
import useOnClickOutside from 'hooks/useOnClickOutside'

const DATA_LIST = ['ko', 'en', 'iata']

export default function Dropdown() {
  const ref = useRef<HTMLDivElement>(null)
  const [isView, setIsView] = useState(false)
  const [selected, setSelected] = useState(DATA_LIST[0])
  useOnClickOutside(ref, () => setIsView(false))

  const handleClickDrop = () => setIsView((prev) => !prev)

  const handleClickData = (data: string) => () => {
    setSelected(data)
    setIsView(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button type='button' className={styles.dropBtn} onClick={handleClickDrop}>
        {selected}
        <CaretDownIcon className={styles.icon} />
      </button>

      <ul className={cx({ [styles.isView]: isView })}>
        {DATA_LIST.map((data) => (
          <li key={data}>
            <button type='button' className={styles.selBtn} onClick={handleClickData(data)}>
              {data}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
