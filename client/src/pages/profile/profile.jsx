import React from 'react'
import { Navigation } from './components/Navigation'
import { Outlet } from 'react-router'
import './index.css'

export const Profile = () => {
  return (
    <div className=' sm:px-6'>
    <h1 className='text-center font-semibold text-3xl pt-5'>My Account</h1>
    <div className='container grid grid-cols-12 sm:grid-cols-1 gap-10 py-10'>
        
        <nav className='lg:col-span-3 xl:col-span-3'>
        <Navigation/>    
        </nav>
        
        <main className=' xl:col-span-9 lg:col-span-9'>
        <Outlet/>
        </main>

    </div>
    </div>
  )
}
