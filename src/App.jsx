import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'


const ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user)

  if (!user) {
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

        <Route path='/protected' element={
          <ProtectedRoute>
            <Route path='/dashboard' element={<Dashboard />}/>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
