import { FiEye, FiMail, FiMessageSquare, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className=' flex gap-3 sm:flex-col lg:items-center xl:items-center md:items-center'>
    <div className='flex-1'>
    <img className=' sm:h-[34rem] object-cover sm:w-full' src="/images/signin-img.png" alt="" />
    </div>


    <div className='flex-1 lg:px-10 xl:px-10 sm:px-5 md:px-10 sm:py-4 md:py-7 space-y-6'>
    <h1 className='text-3xl font-semibold'>Sign Up</h1>
    <p className='text-gray-600'>Already have an account? <Link to={'/signin'} className='text-green-500 font-medium'>Sign In</Link></p>

        <form className=' space-y-7' action="">

         <div className='flex border-b items-center justify-between py-1.5'>
            <input className=' w-full outline-none' placeholder='Your name' type="text" name="email" id="email" />
           {/* <FiUser/> */}
        </div>

        <div className='flex border-b items-center justify-between py-1.5'>
            <input className=' w-full outline-none' placeholder='Username' type="text" name="email" id="email" />
           {/* <FiMail/> */}
        </div>

        
        <div className='flex border-b items-center justify-between py-1.5'>
            <input className=' w-full outline-none' placeholder='Email address' type="text" name="email" id="email" />
           {/* <FiMail/> */}
        </div>

        <div className='flex border-b items-center justify-between py-1.5'>
            <input className=' w-full outline-none' placeholder='Password' type="password" name="password" id="password" />
           <FiEye/>
        </div>
        
        <div className=''>
            <div className='flex gap-1.5 items-center'>
                <input className='' type="checkbox" name="" id="" />
                <span className='text-sm text-gray-600'>Remember me</span>
            </div>
        </div>

        <button type='submit' className='bg-black w-full p-1.5 rounded text-white'>Sign Up</button>
        </form>

    </div>

</div>
  )
}
