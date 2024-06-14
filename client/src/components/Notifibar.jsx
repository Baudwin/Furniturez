import React, { useState } from 'react'
import { FaHourglass, FaHourglassHalf } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

export const Notifibar = () => {
    const [showBar, setShowBar] = useState(true)
    const location  = useLocation()
    
  return (
    // <div className={` ${showBar&&"block"}bg-gray-100 ${location.pathname!='/'&&'block'} flex justify-center items-center p-2 sm:px-6 ${!showBar&&"hidden"}`}>
       <div className={`bg-green-400 flex justify-center items-center p-4 sm:px-6 sticky top-0`}>
        <div className='m-auto space-x-2'>
            {/* <span>30% off storewide - Limited time!</span> */}
            <span className='text-white text-xl font-semibold'>
              In progress... 
              <FaHourglassHalf className='inline-block' color='white'/> </span>
            
        {/* <Link to={'/shop'} className='text-blue-500 underline sm:hidden font-medium'>Shop Now</Link> */}
        </div>
        
        {/* <FiX onClick={()=>{
           
            setShowBar(false)
            }} size={16}/> */}
    </div>
  )
}
