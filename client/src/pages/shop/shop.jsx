import React from 'react'
import { ShopItems } from './components/ShopItems'
import { ShopSort } from './components/ShopSort'

export const Shop = () => {
  return (
    <div className=' container sm:px-8 md:px-10'>

        <div className=' bg-[url("/images/shop-header-img.png")] h-96 flex gap-3 bg-cover justify-center flex-col items-center'>
        <h1 className=' font-bold text-4xl'>Shop Page </h1>
        <p className='text-sm text-center'>Lets design the place you always imagined</p>
        </div>

    
<div className='py-14 sm:py-10 flex flex-col gap-6'>
     {/* <ShopSort/> */}
     <ShopItems/>
</div>
   
        

    </div>
  )
}
