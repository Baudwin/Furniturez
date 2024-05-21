import React, { useState } from 'react'
import { FiX } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

export const Notifibar = () => {
    const [showBar, setShowBar] = useState(true)
    const location  = useLocation()
    
  return (
    <div className={` ${showBar&&"block"}bg-gray-100 ${location.pathname!='/'&&'hidden'} flex justify-center items-center p-2 sm:px-6 ${!showBar&&"hidden"}`}>
        <div className='m-auto space-x-2'>
            <span>30% off storewide - Limited time!</span>
        <Link className='text-blue-500 underline sm:hidden font-medium'>Shop Now</Link>
        </div>
        
        <FiX onClick={()=>{
           
            setShowBar(false)
            }} size={16}/>
    </div>
  )
}
