import React from 'react'
import { NavLink } from 'react-router-dom'
import {FiMenu, FiSearch, FiShoppingBag, FiShoppingCart, FiUser} from 'react-icons/fi'


export const Navbar = () => {
  return (
    <div className='container sm:px-8'>
        <header className='py-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <FiMenu size={27} className='hidden sm:block'/>
                   <h1 className='text-2xl sm:text-xl font-bold'>Furniturez.</h1>  
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
                <FiUser size={20}/>
                <div className='flex gap-1 items-center'>
                  <FiShoppingCart size={20}/>  
                  <span className='bg-black text-white rounded-full h-5.5 w-5 text-center font-bold'>0</span>
                </div>
                
                </div>
           

            </nav>


        </header>
       
    </div>
  )
}
