import React from 'react'
import { FaGift } from 'react-icons/fa'
import { FiGift, FiMinus, FiPlus, FiX } from 'react-icons/fi'

export const Cart = () => {
  return (
    <div className='container sm:px-8 md:px-10 pb-10 pt-5 space-y-10'>
        <h1 className='text-3xl font-semibold text-center'>Cart</h1>
        <div className='grid grid-cols-12 sm:grid-cols-1 gap-4'>
            {/* cart data  */}
        <table className='sm:hidden col-span-8 sm:col-span-1 h-fit' >
            <thead className='text-left border-b-2'>
                <tr className=''>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                </tr>

            </thead>
            <tbody className='py-3'>
             
                <tr className='border-b'>
                    <td className=''>      
                        <div className='flex gap-3'>
                        <img className='w-20 h-20  object-cover' src="/images/couch.png" alt="" />  
                        <div>
                          <h1 className='font-semibold'>Couch</h1>
                        <p>Color : Black</p>
                        <div className='flex  gap-0.5 items-center'>
                            <FiX/>
                            <span>Remove</span>
                        </div>   
                        </div>  
                       
                        </div>
                    </td>

                    <td className=''>
                        <div className='flex border-2 rounded-md px-2 w-fit  gap-2 items-center'>
                          <FiMinus className='flex-1 cursor-pointer' color='grey'/>
                        <span className='font-semibold text-gray-500'>2</span>
                        <FiPlus className=' cursor-pointer' color='grey'/>   
                        </div>     
                    </td>

                    <td>
                        <p>$19.00</p>
                    </td>

                    <td>
                        <p>$38.00</p>
                    </td>
                </tr>
            </tbody>
        </table>

        {/* cart summary  */}
        <div className='border sm:order-2 shadow p-3 col-span-4 space-y-3'>
        <h2 className='font-semibold '>Cart Summary</h2>
        {/* shipping types  */}
        <div className=' flex flex-col gap-2'>
          <label htmlFor="free">
        <div className='border p-2 rounded shadow flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio" name="deliveryType" id="free" />
                <p>Free shipping</p>    
            </div>
            <p>$0.00</p>
        </div>
         </label>
         
         <label htmlFor="express">
           <div className='border p-2 rounded shadow flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio" name="deliveryType" id="express" />
                <p>Express shipping</p>    
            </div>
            <p>+$15.00</p>
        </div> 
         </label>
        
        <label htmlFor="pickup">
           <div className='border p-2 rounded shadow flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <input type="radio" name="deliveryType" id="pickup" />
                <p>Pickup</p>    
            </div>
            <p>$21.00</p>
        </div>  
        </label>  
        </div>
        
       
    {/* shipping types end  */}
    {/* sub total div  */}
    <div className='flex justify-between text-sm items-center'>
    <p className='text-gray-600 font-medium'>Subtotal</p>
    <p className='font-medium text-gray-800'>$1234.00</p>
    </div>
    {/* sub total div end  */}

    {/* total  */}
    <div className='flex justify-between items-center'>
    <p className='font-semibold'>Total</p>
    <p className='font-medium'>$1345.00</p>
    </div>
        <button className='bg-black text-white font-medium w-full p-2 rounded'> Checkout</button>
        </div>

{/* coupon  */}

<div className='col-span-4 py-3 space-y-2'>
    <h1 className='font-semibold'>Have a coupon?</h1>
    <p className='text-gray-600 text-sm'>Add your code for an instant cart discount</p>
    <div className='flex items-center gap-1 border-2 px-2 py-1'>
        <FiGift color='gray'/>
        <input className='flex-1 p-1 outline-none' placeholder='Coupon Code' type="text" name="" id="" />
        <button className=' font-medium text-s'>Apply</button>
    </div>
</div>
        </div>

    </div>
  )
}
