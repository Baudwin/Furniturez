import React from 'react'
import { Navbar } from '../components/Navbar'
import { Outlet } from 'react-router'
import { Notifibar } from '../components/Notifibar'

export const Root = () => {
  return (
    <>
    <Notifibar/>
    <nav>
      <Navbar/>  
    </nav>
    
    <main>
    <Outlet/>
    </main>
    </>
  )
}
