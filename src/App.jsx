import './App.css'
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { supabase } from "./supabase/init";
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout';
import SpacesPage from './pages/SpacesPage';


const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuthStore()

  if (!isLoggedIn) {
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
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='spaces' element={<SpacesPage />} />
        </Route>

        {/* <Route path='/dashboard' element={ProtectedRoute(<Dashboard />)} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
