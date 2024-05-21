import React from 'react'
import { FaCopyright } from 'react-icons/fa'
import { FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={{backgroundColor:"#141718"}} className=' text-white sm:text-gray-400 py- px-10'>

<div className='container'>

    <div className=' flex  justify-between sm:flex-col items-center sm:space-y-2 py-8'>
        <div className='flex sm:flex-col gap-4 items-center'>
        <h1 className='font-bold text-xl text-white '>Furniturez.</h1>
        <hr className='w-5 hidden sm:block border-gray-500'/>
        <span className='text-gray-500 text-lg sm:hidden'> |</span> 
        <p className='text-sm'>Gift & Decoration Store</p>
        </div>
       
        <ul className='flex sm:flex-col gap-3 sm:gap-4 sm:text-center'>
            <li className='text-sm'><Link>Home</Link></li>
            <li className='text-sm'><Link>Shop</Link></li>
            <li className='text-sm'><Link>Product</Link></li>
            <li className='text-sm'><Link>Blog</Link></li>
            <li className='text-sm'><Link>Contact Us</Link></li>
        </ul>
    </div>

    <hr />

    <div className='flex gap-3 sm:flex-col justify-between items-center py-8'>
    <ul className='flex sm:order-2 sm:flex-col gap-4'>
            <li className='text-sm sm:order-2 sm:text-[0.8rem] flex items-center gap-1'>
           <span>Copyright</span>  
            <FaCopyright size={12}/>
            <span>{new Date().getFullYear()} </span>
             <span>Furniturez. All rights reserved</span>
            </li>

            <div className='flex sm:order-1 justify-center items-center gap-3'>
            <li className='font-medium text-sm'><Link>Privacy Policy</Link></li>
            <li className='font-medium text-sm'><Link>Terms of Use</Link></li>
            </div>
           
        </ul> 

        <div className='flex gap-2 items-center sm:order-1'>
            <FiInstagram size={20}/>
            <FiFacebook size={20}/>
            <FiYoutube size={20}/>

        </div>

    </div>

    </div>


    </div>
  )
}
