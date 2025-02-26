import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import AboutPage from './components/pages/about/About'
import ContactPage from './components/pages/contact/Contact'
import HomePage from './components/pages/home/HomePage'
import { DrawerAppBar } from './components/templates'

function App() {

  return (
    <Router >
      <DrawerAppBar />
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fenix-rugby-app" element={<HomePage />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
