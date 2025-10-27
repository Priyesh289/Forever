import React from 'react'
import Title from '.././components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[400px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Forever was born out of a passion for  innovation and a desire to revolution Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates animi laborum rem labore impedit minus reprehenderit distinctio beatae nihil illo!</p>
          <p>Since our inception, we've worked tirelessly to customers with choice, convenience, and Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, illo. Optio, fugiat error! Molestiae eius tenetur sed labore earum. Ad.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission at Forever is to empower customer with choice, convenience, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, sed.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p>We meticulously select and get each product to ensure it meets our strinent Lorem ipsum dolor sit amet.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p>With our user-friendly interface and hassle-free ordering process, shopping Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, earum?</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About