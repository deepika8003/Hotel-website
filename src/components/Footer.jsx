import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-amber-50 ' >
      <div className='py-10 px-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className=''>
        <h1 className='text-sky-500 text-5xl font-bold '>LOGO</h1>
        <p className='text-orange-400 my-6'>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit,
         sed do eiusmod tempor incidunt ut 
          labore et dolore magna aligua</p>
        </div>
       <div className='leading-8 '>
        <h1 className='font-bold '>COMPANY</h1>
        <ul>
          <li>About Us</li>
          <li>Legal Information</li>
          <li>Contact Us</li>
          <li>Blogs</li>
        </ul>
       </div>
       <div className='leading-8 '>
        <h1 className='font-bold'>HELP CENTER</h1>
        <ul>
          <li>Find a Property</li>
          <li>How To Host</li>
          <li>Why Us?</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className='leading-8 '>
        <h1 className='font-bold'>CONTACT INFO</h1>
        <ul>
          <li>Phone:1234567890</li>
          <li>Email:mystery@bubu88</li>
          <li>location:Dharmapuri</li>
          <li className='text-2xl '>
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
          </li>
        </ul>
      </div>
      </div>

      <hr />
      <div className='flex justify-between px-10 py-7'>
        <p>2024@bawazir | All rights reserved</p>
        <p>Created with love by @mystery</p>
      </div>
    </div>
  )
}

export default Footer