import React from 'react'
import { Link, NavLink,useLocation, useNavigate } from 'react-router-dom'
import {FiMenu, FiSearch,  FiShoppingCart, FiUser} from 'react-icons/fi'
import { MobileNav } from './MobileNav'


export const Navbar = () => {
    const navigate = useNavigate()
    const location  = useLocation()
  return (
    <> 
{/* <MobileNav/> */}
    <div className={`container sm:px-8 md:px-10 sm:py-2 ${location.pathname==='/signin'?'block':'block'}`}>
        <header className='py-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <FiMenu size={27} className='hidden sm:block'/>
                   <Link to={'/'} className='text-2xl sm:text-xl font-bold'>Furniturez.</Link>  
                </div>
               
            <ul className='flex nav-links sm:hidden gap-4 text-sm text-gray-700'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/shop'}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to={'/product'}>Product</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact-us'}>Contact Us</NavLink>
                </li>
            </ul>

                <div className='flex items-center gap-2'>
                {/* <FiMenu/> */}
                <FiSearch className='sm:hidden'/>
                <FiUser className=' cursor-pointer' onClick={()=>navigate('/profile')} size={20}/>
                <div className='flex gap-1 items-center'>
                  <FiShoppingCart size={20}/>  
                  <div className='bg-black flex justify-center px-3 py-3 items-center text-white rounded-full h-4 w-4 font-semibold'>
                   <span className=''>0</span>
                </div>
                </div>
                
                </div>
           

            </nav>


        </header>
       
    </div>

        
    </>
  )
}
