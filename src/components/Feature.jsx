import React from 'react'

const Feature = () => {
  return (
    <div>
      <h1 className=' lg:text-5xl md:text-4xl text-3xl font-bold text-blue-600 mt-5 md:px-20 px-8 '>Featured Properties on our Listening</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-20 py-10'>
        <div className='border-2 border-gray-600 p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room1.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
          <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
         <div className='border-2 border-gray-600 p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room2.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
       <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
        <div className='border-2 border-gray-600 p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room3.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
          <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
        <div className='border-2 border-gray-600 p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room4.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
          <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
        <div className='border-2 border-gray-600 p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room5.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
          <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
        <div className='border-2 border-black p-2 w-full h-[550px] rounded-xl md:m-0 mb-4'>
          <img src="src/img/room6.jpg" alt=""  className='h-[400px] w-full rounded-xl'/>
          <h2 className='font-bold text-black text-xl my-3'>Well purnished Apartment</h2>
          <p className='text-orange-400'>Smart sterr USA</p>
          <p className='text-sky-600 my-3'><span className='font-bold text-xl'>$2000 / </span>6 night</p>
        </div>
        

      </div>
    </div>
  )
}

export default Feature