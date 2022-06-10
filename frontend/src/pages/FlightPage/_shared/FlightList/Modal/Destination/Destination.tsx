import { Link } from 'react-router-dom'
import styles from './destination.module.scss'

interface IProps {
  isDepart: boolean
  airport: string
  airportCode: string
}

export default function Destination({ isDepart, airport, airportCode }: IProps) {
  return (
    <section className={styles.wrapper}>
      <div>
        {isDepart ? (
          <Link to='/airport?condition=iata&search=ICN'>인천</Link>
        ) : (
          <Link to={`/airport?condition=iata&search=${airportCode}`}>{airport}</Link>
        )}
      </div>
      <div>
        {isDepart ? (
          <Link to={`/airport?condition=iata&search=${airportCode}`}>{airport}</Link>
        ) : (
          <Link to='/airport?condition=iata&search=ICN'>인천</Link>
        )}
      </div>
    </section>
  )
}
