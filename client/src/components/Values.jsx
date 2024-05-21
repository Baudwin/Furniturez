import React from 'react'
import { FiDollarSign, FiLock, FiPhoneCall, FiTruck } from 'react-icons/fi'

export const Values = () => {
  return (
    <div className='container grid grid-cols-4 sm:grid-cols-2 gap-2 sm:px-8'>
        <div className='bg-gray-100  p-3 space-y-3'>
            <FiTruck size={20}/>
            <h1 className='font-medium text-lg'>Free Shipping</h1>
            <p className='text-gray-500 text-sm'>Order above $200</p>
            
        </div>
        <div className='bg-gray-100 p-3 space-y-3'>
        <FiDollarSign size={20}/>
            <h1 className='font-medium text-lg'>Money-back</h1>
            <p className='text-gray-500 text-sm'>30 days guarantee</p>
            
        </div>

        <div className='bg-gray-100 p-3 space-y-3'>
            <FiLock size={20}/>
            <h1 className='font-medium text-lg'>Secure Payments</h1>
            <p className='text-gray-500 text-sm'>Secured by stripe</p>
            
        </div>

        <div className='bg-gray-100 p-3 space-y-3'>
            <FiPhoneCall size={20}/>
            <h1 className='font-medium text-lg'>24/7 Support</h1>
            <p className='text-gray-500 text-sm'>Phone and email support</p>
            
        </div>

    </div>
  )
}
