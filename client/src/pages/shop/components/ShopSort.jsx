import React from 'react'

export const ShopSort = () => {
  return (
        
        <div className='flex sm:flex-col gap-5 sm:gap-3'>
            <div className=' flex flex-col gap-1'>
                 <label className='uppercase text-sm font-medium text-gray-500' htmlFor="">categories</label>
            <select className='border shadow px-7 py-1 sm:py-2 border-black rounded outline-none' name="" id="">
                <option className='' value="">Living Room</option>
                <option className='' value="">Bedroom</option>
            </select>
            </div>

            <div className=' flex flex-col gap-1'>
                 <label className='uppercase text-sm font-medium text-gray-500' htmlFor="">price</label>
                
            <select className='border shadow px-7 border-black py-1 sm:py-2 rounded outline-none' name="" id="">
                <option value="">All price</option>
                <option value="">Bedroom</option>
            </select>
            </div>
           
        </div>
  )
}
