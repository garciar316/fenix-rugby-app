import { Footer } from '@/components/organisms'
import { HomePage } from '@/components/pages'
import { DrawerAppBar } from '@/components/templates'
import { RouteElements, UsersRouteElements } from '@/routes'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

const theme = createTheme({
  palette: {
    background: {
      default: "rgb(0, 0, 45)"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
      <Footer />
    </ThemeProvider>
  )
}

export default App
