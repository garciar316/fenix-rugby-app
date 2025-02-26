import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import RouteElements from './routes/main.routes'
import HomePage from './components/pages/home/HomePage'
import UsersRouteElements from './routes/users.routes'
import DrawerAppBar from './components/templates/drawer-app-bar/DrawerAppBar'


function App() {

  return (
    <Router >
      <DrawerAppBar />
      <Suspense fallback={<h2>Cargando...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {
            RouteElements.map((route) => (
              <Route key={route.text} path={route.path} element={route.page} />
            ))
          }
          {
            UsersRouteElements.map((route) => (
              <Route key={route.text} path={route.path} element={route.page} />
            ))
          }
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
