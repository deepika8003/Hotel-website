import React from 'react'

const Rental = () => {
  return (
  <div className='w-full  py-8 px-4 md:px-20 flex flex-col lg:flex-row '>
      <div className='w-full lg:w-1/2 my-auto order-2 lg:order-1 lg:text-left text-center '>
        <h1 className=' text-sky-500 md:text-4xl text-2xl font-bold '>Discover More  About property Rental</h1>
        <p className=' py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, enim? Quam officia nam perspiciatis impedit itaque accusamus fugit cumque, officiis optio, accusantium ullam praesentium!
           Eveniet perferendis ipsum incidunt vero nesciunt?</p>
        <button className='text-white text-xl px-7 py-4 mt-5 rounded-4xl bg-yellow-500'>Discover More</button>
      </div>
      <div className='w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 flex justify-center '>
        <img src="src/img/rental.png" alt="" className='rounded-2xl w-full max-w-md lg:max-w-full h-auto object-contain' />
      </div>
    </div>
  )
}

export default Rental