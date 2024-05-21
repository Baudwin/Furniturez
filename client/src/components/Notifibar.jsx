import React from 'react'
import { FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Notifibar = () => {
  return (
    <div className='bg-gray-100 flex justify-center items-center p-2 sm:px-6'>
        <div className='m-auto space-x-2'>
            <span>30% off storewide - Limited time!</span>
        <Link className='text-blue-500 underline sm:hidden font-medium'>Shop Now</Link>
        </div>
        
        <FiX size={16}/>
    </div>
  )
}
