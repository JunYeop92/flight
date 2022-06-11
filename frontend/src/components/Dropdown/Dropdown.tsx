import { useRef, useState } from 'react'
import cx from 'classnames'
import { CaretDownIcon } from 'assets/svgs'
import styles from './dropdown.module.scss'
import useOnClickOutside from 'hooks/useOnClickOutside'

interface IProps {
  dataList: string[]
  value: string
  handleSelect: (value: string) => void
}

export default function Dropdown({ dataList, value, handleSelect }: IProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isView, setIsView] = useState(false)
  useOnClickOutside(ref, () => setIsView(false))

  const handleClickDrop = () => setIsView((prev) => !prev)

  const handleClickData = (data: string) => () => {
    handleSelect(data)
    setIsView(false)
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button type='button' className={styles.dropBtn} onClick={handleClickDrop}>
        {value}
        <CaretDownIcon className={styles.icon} />
      </button>

      <ul className={cx({ [styles.isView]: isView })}>
        {dataList.map((data) => (
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
