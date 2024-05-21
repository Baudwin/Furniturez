import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const BannerSection = () => {
  return (
    <div className=''>
        <div className='flex  sm:flex-col items-center bg-gray-100'>
        <img className='h-[25rem] flex-1' src="/images/banner-img.png" alt="" />
            <div className='lg:p-10 xl:px-10 p-6 flex-1 space-y-5'>
              <h3 className='uppercase text-blue-500 text-xl font-semibold'>sale up to 35%</h3>
                <h1 className='text-4xl sm:text-3xl font-semibold'>HUNDREDS of <br /> New lower prices!</h1>
                <p className='text-gray-700 text-sm' >It's more affordable than ever to give every 
                  room in your home a stylish makeover</p>

                <div className='flex items-center gap-1'>
                  <Link className='text-sm underline'>Shop Now </Link>
                  <FiArrowRight/>
                </div>
                  
            </div>
        </div>
        
    </div>
  )
}
