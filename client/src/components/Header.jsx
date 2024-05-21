import React from 'react'
export const Header = () => {
  return (
    <div className=' container flex sm:flex-col sm:px-8 gap-4 items-center sm:items-start'>
       
    
        
        <div className='flex-1'>
          <h1 className=' text-4xl capitalize font-semibold'>Simply unique<span className='text-gray-600'>/</span></h1>
            <h1 className=' text-4xl capitalize font-semibold'>Simply better<span className='text-gray-600'>.</span></h1>  
        </div>

        <div className='text-sm text-gray-500 flex-1'>
           <p>
       <b>3legant</b>  is a gift & decorations store based in HCMC,<br/>
         Vietnam. Est since 2019. 
        </p> 
        </div>
        
    </div>
  )
}
