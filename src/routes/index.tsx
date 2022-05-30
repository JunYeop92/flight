import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import ArrivePage from 'pages/ArrivePage'
import DepartPage from 'pages/DepartPage'
import Navigation from 'components/Navigation/Navigation'
import NowTime from 'components/NowTime/NowTime'

export default function App() {
  return (
    <div className={styles.app}>
      <header>인천공항 운항 스케줄</header>
      <main>
        <NowTime />
        <Routes>
          <Route path='/' element={<DepartPage />} />
          <Route path='arrive' element={<ArrivePage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  )
}
