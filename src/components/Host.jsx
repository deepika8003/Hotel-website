import React from 'react'

const Host = () => {
  return (
    <div className='w-full bg-amber-50 py-8 px-4 md:px-20 flex flex-col lg:flex-row '>
      <div className='w-full lg:w-1/2 my-auto order-2 lg:order-1 lg:text-left text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Try Hosting With Us</h1>
        <p className='text-xl md:text-2xl py-4'>Earn extra just by renting your property...</p>
        <button className='text-white text-lg md:text-xl px-5 py-3 md:px-7 md:py-4 mt-5 rounded-4xl bg-yellow-500'>Became A Host</button>
      </div>
      <div className='w-full lg:w-1/2 order-1 lg:order-2 mb-6 lg:mb-0 flex justify-center'>
        <img src="src/img/host.png" alt="" className='rounded-2xl w-full max-w-md lg:max-w-full h-auto object-contain' />
      </div>
    </div>
  )
}

export default Host