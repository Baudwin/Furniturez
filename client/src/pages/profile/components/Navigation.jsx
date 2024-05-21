import React from 'react'
import { FaCamera, FaCameraRetro } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className=' bg-gray-100 py-4 rounded-lg'>
        <div className='flex justify-center p-5 items-center flex-col'>
          <div className='relative'>
            <img className='w-20 h-20 object-cover rounded-full border' src="/images/couch.png" alt="" />
            <div className='bg-black absolute left-12 bottom-0 border-2 border-white rounded-full flex justify-center items-center h-8 w-8'>
             <FaCamera color='white' className=''/> 
            </div>
            
            
            {/* <div className='p-2 w-4 h-4 bg-black rounded-full'>
              <FaCamera/>
            </div> */}
          </div>
        
        <h1 className='font-bold text-xl'>Titah Baudwin</h1>    
        </div>
       
       <ul className='px-3 profile-nav flex flex-col gap-3'>
       <NavLink to={'account-details'}> Account </NavLink>
        <NavLink to={'address'}> Address </NavLink>
        <NavLink to={'orders'}> Orders </NavLink>
        <NavLink to={'wishlist'}> Wishlist </NavLink>
        <Link> Log Out </Link>

       </ul>
        
    </div>
  )
}
