import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Our superspecialist doctors provide the highest quality of care through a team-based, doctor-led model. Trained at some of the world's most renowned institutions</p>
          <p>our highly experienced doctors are distinguished experts in their respective specialities. Our doctors work full-time and exclusively across Medanta hospitals.</p>
          <b className='text-gray-800'> Our Vision</b>
          <p>In addition to offering superspecialised care in their own field, the Medanta organisational structure enables every doctor to help create a culture of collaboration and multispecialty care integration.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency</b>
          <p>Your preferences matter, and we understand the importance of finding the perfect match for your healthcare needs.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Discover Excellence: Where Expertise Meets Healthcare!
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white translate-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Your health doesn't wait for office hours, and neither should your access to expert advice.</p>
        </div>

      </div>
    </div>
  )
}

export default About
