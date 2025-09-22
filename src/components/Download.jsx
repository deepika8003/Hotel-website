import React from 'react'

const Download = () => {
  return (
    <div className=' bg-amber-50 md:p-20 p-10 md:text-left text-center'>
      <h1 className=' md:text-5xl text-4xl font-bold my-4'>Download Our <br /> Mobile  App</h1>
      <p>Available for free on these platforms</p>
 
     <div className='my-10'>
       <a href="" className='text-white bg-amber-500 px-7 py-3 sm:mr-10  rounded-md ' ><i class="fa-brands fa-google-play "></i> PlayStore</a>
      <a href="" className='text-white bg-amber-500 sm:px-7 py-3 rounded-md sm:inline block mt-5 sm:w-auto w-[150px] sm:mx-0 mx-auto' ><i class="fa-brands fa-app-store"></i> AppleStore</a>
     </div>
    </div>
  )
}

export default Download