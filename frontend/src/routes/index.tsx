import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Navigation from 'components/Navigation/Navigation'
import Title from 'components/Title/Title'
import DepartPage from 'pages/FlightPage/DepartPage/DepartPage'
import ArrivePage from 'pages/FlightPage/ArrivePage/ArrivePage'
import AirportPage from 'pages/AirportPage/AirportPage'

export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <Title />
        <div className={styles.nav}>
          <Navigation />
        </div>
      </header>
      <main>
        <div className={styles.content}>
          <Routes>
            <Route path='/' element={<DepartPage />} />
            <Route path='arrive' element={<ArrivePage />} />
            <Route path='airport' element={<AirportPage />} />
            <Route path='*' element={<div>404</div>} />
          </Routes>
        </div>
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  )
}
