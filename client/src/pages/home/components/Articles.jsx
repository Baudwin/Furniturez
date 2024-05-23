import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Articles = () => {
  return (
    <div className='container space-y-4 sm:px-8'>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Articles</h1>   
        <div className='flex items-center gap-1 text-sm'>
        <Link className='text-sm underline'>More Articles</Link>
                <FiArrowRight size={14}/>  
                </div>
         
        </div>
        
        <div className='grid grid-cols-3 sm:grid-cols-1 gap-4'>
            <div className='flex flex-col gap-2'>
                <img src="/images/home-img.png" alt="" />
                <p>7 ways to decor your home</p>
                <div className='flex items-center gap-1 text-sm'>
                  <Link className='underline '>Read More</Link>
                <FiArrowRight size={14}/>  
                </div>
                
            </div>

            <div className='flex flex-col gap-2'>
                <img src="/images/kitchen-img.png" alt="" />
                <p>Kitchen organization</p>
                <div className='flex items-center gap-1 text-sm'>
                  <Link className='underline '>Read More</Link>
                <FiArrowRight size={14}/>  
                </div>
                
            </div>

                <div className='flex flex-col gap-2'>
                <img src="/images/bedroom-img.png" alt="" />
                <p>Decor your bedroom</p>
                <div className='flex items-center gap-1 text-sm'>
                  <Link className='underline '>Read More</Link>
                <FiArrowRight size={14}/>  
                </div>
                
            </div>


        </div>
        
    </div>
  )
}
