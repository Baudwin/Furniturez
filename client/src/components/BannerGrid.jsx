import React from 'react'
import { Link } from 'react-router-dom'

export const BannerGrid = () => {
  return (
    <div className='container sm:px-8 flex sm:flex-col gap-3'>
    
        <div className='relative flex-1'>
        <div className='absolute p-10'>
        <h2 className='text-2xl font-semibold'>Living Room</h2>
        <Link className='underline text-sm'>Shop Now</Link>
         </div>
        <img className='h-' src="/images/img1.png" alt="" />
        </div>

    <div className='flex-1 flex flex-col gap-4'>

        <div className='relative'>
        <div className='absolute bottom-16 px-6'>
        <h2 className='text-2xl font-semibold'>Bedroom</h2>
        <Link className='underline text-sm'>Shop Now</Link>
         </div>
        <img src="/images/img-2.png" alt="" />
        </div>

        <div className='relative'>
        <div className='absolute bottom-16 px-6'>
        <h2 className='text-2xl font-semibold'>Kitchen</h2>
        <Link className='underline text-sm'>Shop Now</Link>
         </div>
        <img src="/images/img3.png" alt="" />
        </div>

    </div>

    </div>
  )
}
