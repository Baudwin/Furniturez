import React from 'react'
import { Link } from 'react-router-dom'

export const BannerSection = () => {
  return (
    <div className=''>
        <div className='flex  sm:flex-col items-center bg-gray-100'>
        <img className='h-96' src="/images/banner-img.png" alt="" />
            <div className='p-10 xl:w-96 lg:w-96 space-y-4'>
              <h3 className='uppercase text-blue-500 font-semibold'>sale up to 35%</h3>
                <h1 className='text-4xl sm:text-3xl font-semibold'>HUNDREDS of New lower prices!</h1>
                <p className='text-gray-700 text-sm' >It's more affordable than ever to give every 
                  room in your home a stylish makeover</p>

                  <Link className='text-sm underline'>Shop Now </Link>
            </div>
        </div>
        
    </div>
  )
}
