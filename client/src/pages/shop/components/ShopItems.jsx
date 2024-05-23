import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'

export const ShopItems = () => {

  return (
    <div className='space-y-9 '>
    <div className=' grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4'>
        {
            [1,2,3,4,5,6].map((p,i)=>{
                return  <div className='flex gap-3 sm:flex-col' key={i}>
            <img className=' cursor-pointer lg:h-64 xl:h-64 2xl:w-64 md:w-64 sm:h-96 object-cover' src="/images/bamboo-basket.png" alt="" />
            <div className='space-y-3 lg:w-60 xl:w-60 2xl:w-60 md:w-60 py-4 sm:py-2'>
                <div className='flex gap-0.5'>
                   {
                [1,2,3,4,5].map((i,s)=>{
                    return <div key={i}> < FaStar size={12} /></div>
                })
            }   
                </div>
                
                <div className='flex justify-between items-center'>
                   <p className='font-bold text-sm'>Beige lamp</p> 
                   <FiHeart className='hidden sm:block' size={20}/>
                </div>
              
              <div className='flex gap-2 items-center'>
                <p className='font-semibold text-sm'>$7.99</p>
                <p className='text-gray-500 text-sm line-through'>$400</p>
              </div>
                
                <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet, consetur  adiping elit. Nihil omnis mollitia illum?
                </p>

                <div className='space-y-2'>
                <button className='bg-black w-full py-1.5 sm:py-2 text-white font-medium rounded-lg'>Add to cart</button>
                <button className='flex sm:hidden justify-center items-center w-full gap-0.5'>
                    <FiHeart size={14} className='mt-1'/>
                    <span>wishlist</span>
                </button>
                </div>

            </div>


        </div>
            })
        }
       
    </div>

         <div className='flex justify-center'>
            <button className='rounded-full border border-black px-4 py-1 shadow font-medium'>Show more</button>
        </div>


        </div>
  )
}
