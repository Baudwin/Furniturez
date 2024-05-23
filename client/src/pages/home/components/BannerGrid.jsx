import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export const BannerGrid = () => {
  return (
    <div className='container sm:px-8 flex sm:flex-col gap-3'>
  
<div className=' flex-1 bg-gray-100'>
        <div className='p-10'>
        <h2 className='text-2xl font-semibold'>Living Room</h2>
        <div className='flex items-center gap-1'>
                  <Link className='text-sm underline'>Shop Now </Link>
                  <FiArrowRight className='mt-0.5'/>
                </div>
         </div>

        <img className='h-80 sm:h-72 object-cover w-full' src="/images/img1.png" alt="" />
        </div>



    <div className='flex-1 flex flex-col gap-3'>

        <div className='flex flex-1 bg-gray-100'>

        <div className=' place-self-center bottom-6 px-6'>
        <h2 className='text-2xl font-semibold'>Bedroom</h2>
        <div className='flex items-center gap-1'>
                  <Link className='text-sm underline'>Shop Now </Link>
                  <FiArrowRight className='mt-0.5'/>
                </div>
         </div>

        <img className='w-2/4 sm:h-52 h-full' src="/images/img-2.png" alt="" />
        </div>

  <div className='flex flex-1 bg-gray-100'>

<div className=' place-self-center bottom-6 px-6'>
<h2 className='text-2xl font-semibold'>Kitchen</h2>
<div className='flex items-center gap-1'>
          <Link className='text-sm underline'>Shop Now </Link>
          <FiArrowRight className='mt-0.5'/>
        </div>
 </div>

<img className='w-2/4 sm:h-52 h-full' src="/images/img3.png" alt="" />
</div>

    </div>

    </div>
  )
}
