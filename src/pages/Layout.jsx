import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar' 


import React from 'react'

function Layout() {
  return (
    <main className='w-screen flex'>
        <Sidebar />
        <Outlet />
    </main>
  )
}

export default Layout