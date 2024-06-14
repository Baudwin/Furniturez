import React, { useState } from 'react'
import { Link, NavLink,useLocation, useNavigate } from 'react-router-dom'
import {FiMenu, FiSearch,  FiUser,  FiFacebook, FiHeart, FiInstagram, FiShoppingCart, FiX, FiYoutube} from 'react-icons/fi'

export const Navbar = () => {
    const navigate = useNavigate()
    const location  = useLocation()
    const [showMobileNav , setShowMobileNav] = useState(false)

    const showNav = ()=>{
        setShowMobileNav(true)
    }

    const hideNav = ()=>{
        setShowMobileNav(false)
    }

    const toggleMenu = ()=>{
        setShowMobileNav(false)
    }

  return (
    <> 
    <div className={`container sm:px-8 md:px-10 sm:py-2 ${location.pathname==='/signin'?'block':'block'}`}>
        <header className='py-2'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <FiMenu onClick={showNav} size={27} className='hidden cursor-pointer sm:block'/>
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
                <FiUser className=' cursor-pointer' onClick={()=>navigate('/profile/account-details')} size={20}/>
                <div
                 onClick={()=>{
                    toggleMenu()
                    navigate('/cart')
                    
                    }}
                 className='flex gap-1 cursor-pointer items-center'>
                  <FiShoppingCart size={20}/>  
                  <div className='bg-black flex justify-center px-3 py-3 items-center text-white rounded-full h-4 w-4 font-semibold'>
                   <span className=''>0</span>
                </div>
                </div>
                
                </div>
           

            </nav>


        </header>
       
    </div>

{/* Mobile Navigation  */}

    <div className={` fixed ${showMobileNav&& 'sm:block'} hidden inset-0 h-screen w-screen bg-gray-300 bg-opacity-100`}>
            <div className='border flex flex-col mobile-nav bg-white h-screen w-11/12 py-3 px-4 space-y-3'>
               
                {/* brand  */}
                <div className='flex items-center justify-between'>
               <h1 className='font-bold text-xl'>Furniturez.</h1>
                <FiX onClick={hideNav} className=' cursor-pointer' size={22} color='grey'/>
                </div>
    
                {/* search  */}
                <div className='flex gap-2 items-center border-2 rounded p-2'>
                <FiSearch/>
                <input placeholder='Search' className='outline-none flex-1' type="text" name="" id="" />
                </div>
    
            {/* Nav items ... styles in css file  */}
            <ul className=' flex flex-1 flex-col gap-3'>
           <Link onClick={toggleMenu} className='font-medium' to={'/'}>Home </Link>
           <Link onClick={toggleMenu} className='font-medium' to={'/shop'}>Shop </Link>
           <Link onClick={toggleMenu} className='font-medium' to={'/'}>Product </Link>
           <Link onClick={toggleMenu} className='font-medium' to={'/contact-us'}>Contact Us </Link>
           </ul>
    
           {/* bottom nav items  */}
        
            <div className=' flex flex-col gap-4'>
              <span className='flex items-center justify-between border-b-2 py-2'>
            <Link className='text-gray-500 font-medium' to={'/'}>Cart </Link>
            <div onClick={()=>{
                toggleMenu()
                navigate('/cart')
                
                }} className='flex items-center cursor-pointer gap-1'>
            <FiShoppingCart size={20}/> 
             <div className='bg-black flex justify-center px-2.5 py-2.5 items-center text-white rounded-full h-2 w-2 font-semibold'>
                <span className=''>0</span>
            </div>
            </div>
            
            </span> 
    
            <span className='flex items-center justify-between border-b-2 py-2'>
            <Link className='text-gray-500 font-medium' to={'/'}>Wishlist </Link>
            <div className='flex items-center gap-1'>
             <FiHeart size={20}/>
             <div className='bg-black flex justify-center px-2.5 py-2.5 items-center text-white rounded-full h-2 w-2 font-semibold'>
                <span className=''>0</span>
            </div>
            </div>
            
            </span> 
    
            <button className='bg-black rounded text-white w-full py-2'> Sign in</button>
            {/* Social links  */}
            <div className='flex gap-4'>
            <FiInstagram size={20}/>
            <FiFacebook size={20}/>
            <FiYoutube size={20}/>
            </div>
            {/* Social links end  */}
            </div>
    
    
            </div>
             
        </div>
        {/* End of mobile navigation  */}
    </>
  )
}


