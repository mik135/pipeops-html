import { Outlet } from 'react-router-dom'


import React from 'react'

function Layout() {
  return (
    <main className='w-screen flex'>
        <Outlet />
    </main>
  )
}

export default Layout