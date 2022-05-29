import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'
import ArrivePage from 'pages/ArrivePage'
import DepartPage from 'pages/DepartPage'
import Navigation from 'components/Navigation/Navigation'

export default function App() {
  return (
    <div className={styles.app}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<DepartPage />} />
          <Route path='arrive' element={<ArrivePage />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  )
}
