import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import ArrivePage from 'pages/ArrivePage'
import DepartPage from 'pages/DepartPage'
import Navigation from 'components/Navigation/Navigation'
import Title from 'components/Title/Title'
import WeatherPage from 'pages/WeatherPage'

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
            <Route path='weather' element={<WeatherPage />} />
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
