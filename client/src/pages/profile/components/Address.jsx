import React from 'react'
import { FaEdit, FaRegEdit} from 'react-icons/fa'
import { FiPenTool } from 'react-icons/fi'

export const Address = () => {
  return (
    <div className='space-y-3'>
        <h1 className='font-bold text-lg'>Address</h1>
        
        <div className='grid grid-cols-2 sm:grid-cols-1 gap-4'>

             <div className=' p-3 rounded-lg border border-gray-400'>
            <div className='flex justify-between'>
                <h2 className='font-medium'>Billing Address</h2>
            <span className='flex items-center text-gray-500 text-sm gap-[1px]'>
              <FaRegEdit />  
                <span>Edit</span>
            </span> 
            </div>
           
            <div className='flex flex-col text-gray-600'>
            <p className='text=sm'>Titah Baudwin</p>
            <p className='text-sm'>(+237) 67868xxxx</p>
            <p className='text-sm'>Mile 4, Limbe, Cameroon</p>
            </div>
          
        </div> 

        <div className=' p-3 rounded-lg border border-gray-400'>
            <div className='flex justify-between'>
                <h2 className='font-medium'>Shipping Address</h2>
            <span className='flex items-center text-gray-500 text-sm gap-[1px]'>
              <FaRegEdit />  
                <span>Edit</span>
            </span> 
            </div>
           
            <div className='flex flex-col text-gray-600'>
            <p className='text=sm'>Titah Baudwin</p>
            <p className='text-sm'>(+237) 67868xxxx</p>
            <p className='text-sm'>Mile 4, Limbe, Cameroon</p>
            </div>
          
        </div> 

        </div>

      
        
</div>
  )
}
