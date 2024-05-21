import React from 'react'
import products from '../new-arrivals'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
// import {Pagination, Navigation} from 'swiper'
// import 'swiper/components/navigation/navigation.min.css'


export const ProductCarousel = () => {
  return (
    <>
    <div className='space-y-5 container sm:px-8' >
    <div className='flex justify-between'>
        <h1 className='font-semibold text-2xl'>New <br/> Arrivals</h1>
        <div className='flex items-center place-self-end gap-1'>
           <Link className='text-black text-sm  underline'>More Products </Link> 
           <FiArrowRight className='mt-0.5'/>
        </div>
        
    </div>

<div className='grid grid-cols-4 sm:grid-cols-2 gap-3'>

   {
    products.map(product=>{
        return <div className='space-y-2' key={product.id}>
          <div className='bg-gray-100 p-3 lg:space-y-3 xl:space-x-3'>
            <div className='flex flex-col gap-1'>
                <span className='text-black w-fit rounded font-semibold uppercase px-2 text-sm bg-white'>new</span>
                <span className='text-white w-fit text-sm rounded px-2 bg-green-400'>-50%</span>
            </div>
            <img className=' border-inherit h-36 w-full object-cover' src={product.img} alt="" />
            <div className='flex justify-center'>
               <button className='bg-black text-white rounded w-full py-2 text-sm'>Add to cart</button> 
            </div>
            
            </div>  
            <div className='flex flex-col'>
                <div className='flex gap-1'>
                    {
                [1,2,3,4,5].map(rating=>{
                 return <FaStar key={rating} size={12}/>   
                })
               }   
                </div>

                <span className='text-sm font-medium'>{product.name}</span>
                <div className='flex gap-2'>
                <span className='text-sm font-medium'>{product.currentPrice}</span>
                    <span className='text-gray-400 line-through text-sm'>{product.prevPrice}</span>
                </div>
            </div>

        </div>
    })
   }
</div>

<hr className='border-1 border-black' />
    </div>
    
    
    </>
  )
}
