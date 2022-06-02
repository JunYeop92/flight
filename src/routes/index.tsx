import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import ArrivePage from 'pages/ArrivePage'
import DepartPage from 'pages/DepartPage'
import Navigation from 'components/Navigation/Navigation'
import NowTime from 'components/NowTime/NowTime'
import Title from 'components/Title/Title'
import WeatherPage from 'pages/WeatherPage'

export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <Title />
      </header>
      <main>
        <NowTime />
        <Routes>
          <Route path='/' element={<DepartPage />} />
          <Route path='arrive' element={<ArrivePage />} />
          <Route path='weather' element={<WeatherPage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  )
}
