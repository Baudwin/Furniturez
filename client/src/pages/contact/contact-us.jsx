import React from 'react'
import { FaHome, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FiArrowRight, FiHome, FiMail, FiPhone, FiPhoneCall } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Values } from '../home/components/Values'

export const ContactUs = () => {
  return (
    <> 
  
    <div className='container pt-3 pb-8 space-y-6 sm:px-8 md:px-10'>
        <div className='w-3/5 sm:w-full md:w-full space-y-3'>
            <h3 className='text-3xl font-semibold'>We believe in sustainable decor. We're passionate about life at home.</h3>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sint nihil. Mollitia exercitationem eius minima autem deleniti dicta obcaecati ex.</p>
        </div>
        
        {/* about us  */}
        <div className='flex bg-gray-100 items-center sm:flex-col'>
        <img className='h-96 md:h-[19rem] flex-1 object-cover' src="/images/banner-img.png" alt="" />

        <div className='flex-1 px-10 space-y-4 sm:py-10'>
        <h2 className='text-2xl font-medium'>About Us</h2>
        <p className='text-sm text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde quibusdam, magnam earum asperiores quae animi.</p>

        <div className='border-b border-black w-fit flex gap-1 items-center'>
            <Link className='text-sm'>Shop Now</Link>
            <FiArrowRight/>
        </div>
        </div>

        </div>

        {/* contact us  */}
        <div  className='space-y-3'>
            <h2 className='text-2xl font-medium text-center'>Contact Us</h2>

            <div className=' flex gap-4 sm:flex-col'>
                <div className='bg-gray-100 flex-1 flex flex-col items-center pb-6 pt-3 space-y-1'>
                <FiHome size={20}/>
                <p className='uppercase  font-bold text-gray-500'>Address</p>
                <p className='text-sm font-semibold'>mile 4, Limbe, Cameroon</p>
                </div>

                <div className='bg-gray-100 flex-1 flex flex-col items-center pb-6 pt-3 space-y-1'>
                <FiPhone size={20}/>
                <p className='uppercase  font-bold text-gray-500'>contact us</p>
                <p className='text-sm font-semibold'>+237620627761</p>
                </div>

                <div className='bg-gray-100 flex-1 flex flex-col items-center pb-6 pt-3 space-y-1'>
                <FiMail size={20}/>
                <p className='uppercase font-bold text-gray-500'>email</p>
                <p className='text-sm font-semibold'>baudwin12@gmail.com</p>
                </div>

            </div>
            
        </div>

        {/* contact form and map  */}
        <div className='flex gap-5 sm:flex-col'>
            <form className='flex-1 space-y-4 sm:order-2' action="">
            <div className='flex flex-col gap-1.5'>
                <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">full name</label>
                <input placeholder='Your Name' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">email address</label>
                <input placeholder='Your Email' className=' w-full focus:outline-none rounded border-2 p-1' type="text" name="fname" id="fname" />
            </div>

            <div className='flex flex-col gap-1.5'>
                <label className=' uppercase text-[0.8rem] text-gray-600 font-medium' htmlFor="">old password</label>
                <textarea className=' border-2 p-2'  placeholder='Your message' name="" id="" cols="30" rows="5"></textarea>
            </div>

        <button className='bg-black text-white font-medium px-3 py-2 rounded-lg text-sm'>Send Message</button>
            </form>

            <img className='object-cover h-[23rem] md:h-[19rem] sm:order-1' src="/images/map.png" alt="" />

        </div>

    </div>

    
 <div className='bg-gray-100 md:px-10'>
       <Values/>  
    </div>
    </>
  )
}
