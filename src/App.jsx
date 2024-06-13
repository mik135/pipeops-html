import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore()

  if (user == null) {
    return <Navigate to="/login" />
  }

  return children
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<Signup />}/>

        <Route path='/dashboard' element={ProtectedRoute(<Dashboard />)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
