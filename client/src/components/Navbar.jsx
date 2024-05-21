import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {FiMenu, FiSearch,  FiShoppingCart, FiUser} from 'react-icons/fi'


export const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='container sm:px-8 sm:py-2'>
        <header className='py-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <FiMenu size={27} className='hidden sm:block'/>
                   <Link to={'/'} className='text-2xl sm:text-xl font-bold'>Furniturez.</Link>  
                </div>
               
            <ul className='flex sm:hidden gap-4 text-sm text-gray-700'>
                <li>
                    <NavLink>Home</NavLink>
                </li>
                <li>
                    <NavLink>Shop</NavLink>
                </li>
                <li>
                    <NavLink>Product</NavLink>
                </li>
                <li>
                    <NavLink>Contact Us</NavLink>
                </li>
            </ul>

                <div className='flex items-center gap-2'>
                {/* <FiMenu/> */}
                <FiSearch className='sm:hidden'/>
                <FiUser className=' cursor-pointer' onClick={()=>navigate('/profile')} size={19}/>
                <div className='flex gap-1 items-center'>
                  <FiShoppingCart size={19}/>  
                  <div className='bg-black flex justify-center items-center text-white rounded-full h-4 w-4  font-semibold'>
                   <span className='text-sm'>0</span>
                </div>
                </div>
                
                </div>
           

            </nav>


        </header>
       
    </div>
  )
}
