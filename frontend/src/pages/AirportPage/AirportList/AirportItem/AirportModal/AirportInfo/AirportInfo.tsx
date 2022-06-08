import styles from './airportInfo.module.scss'

interface IProps {
  data: { name: string; nameKo: string; cityNameKo: string; countryNameKo: string }
}

export default function AirportInfo({ data }: IProps) {
  const { name, nameKo, cityNameKo, countryNameKo } = data

  return (
    <div className={styles.wrapper}>
      <h2>
        <span>{nameKo}</span>
        <span>({name})</span>
      </h2>
      <dl>
        <div>
          <dt>도시</dt>
          <dd>{cityNameKo}</dd>
        </div>
        <div>
          <dt>나라</dt>
          <dd>{countryNameKo}</dd>
        </div>
      </dl>
    </div>
  )
}
