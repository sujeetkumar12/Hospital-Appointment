import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT  <span className='text-gray-700 font-semibold'>US</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
      </div>


      <div className='flex flex-col justify-center items-start gap-6'>
        <p>OUR OFFICE</p>
        <p>D-18 Basement Noida </p>
        <p>6202119002 <br /> Email :sujeetworkworld@gmail.com</p>
        <p>Career at PRESCRIPTO</p>
        <p>Im sujjet im fine </p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white translate-all duration-500'>Explore Job </button>
      </div>
    </div>
  )
}

export default Contact
