import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { ReadMore } from '../../../components/ReadMore'

export const Articles = () => {
  return (
    <div className='container space-y-4 sm:px-8'>
        <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-semibold'>Articles</h1> 

       <div className="flex w-fit items-center gap-1 border-b border-black">
        <Link to={'/'} className="text-sm">More Articles</Link>
        <FiArrowRight/>
    </div>
         
        </div>
        
        <div className='grid grid-cols-3 sm:grid-cols-1 gap-4'>
            <div className='flex flex-col gap-2'>
                <img src="/images/home-img.png" alt="" />
                <p>7 ways to decor your home</p>
                <ReadMore/>
                
            </div>

            <div className='flex flex-col gap-2'>
                <img src="/images/kitchen-img.png" alt="" />
                <p>Kitchen organization</p>
                <ReadMore/>
                
            </div>

                <div className='flex flex-col gap-2'>
                <img src="/images/bedroom-img.png" alt="" />
                <p>Decor your bedroom</p>
                <ReadMore/>
                
            </div>

        </div>
        
    </div>
  )
}
