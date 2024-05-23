import React from 'react'
import Swipe from '../../../components/Swiper'


export const AccountDetails = () => {
  return (
    <div className='' >
      <form className='space-y-4' action="">

        {/* Account details  */}

        <div className='space-y-3'>
     <h1 className='text-lg font-bold'>Account Details </h1> 
          <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">First name *</label>
        <input placeholder='First name' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">Last name *</label>
        <input placeholder='Last name' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">Display name *</label>
        <input placeholder='Display name' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
        <p  className=' text-gray-500 text-[0.8rem]'>This will be how your name will be displayed in the account section and in reviews</p>
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">Email *</label>
        <input placeholder='Email' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

        </div>
  

{/* password  */}
<div className='space-y-3'>
  <h1 className='text-md font-bold'>Password</h1>
 <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">old password</label>
        <input placeholder='Old password' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">new password</label>
        <input placeholder='New password' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

      <div className='flex flex-col gap-1.5'>
        <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">repeat new password</label>
        <input placeholder='Repeat new password' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
      </div>

</div>

<button className='text-white text-sm font-medium px-6 py-2.5 rounded-md shadow bg-black' type="submit">Save changes</button>
      </form>

      </div>
  )
}
