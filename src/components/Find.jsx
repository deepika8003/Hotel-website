import React from 'react'

const Find = () => {
  return (
    <div className='m-8'>
        <div className='flex w-full mb-4'>
            <h1 className='text-sky-500 text-3xl font-bold '>LOGO</h1>
            <ul className='flex w-full  items-center'>
                <li className='md:px-5 px-3 ml-4'>Find a property</li>
                <li className='md:px-5 px-3'>Share stories</li>
                <li className='md:px-5 px-3'>Rental guides</li>
                <li className='md:px-5 px-3'>Download Mobile App</li>
            </ul>

        </div>
        <div className='bg-[url(src/img/findbg.jpg)] rounded-2xl h-[600px] bg-repeat-round  '>
            <div className='sm-p-20 p-15'>
                <h1 className='sm:text-5xl  text-3xl  text-blue-300 font-bold'>Find an apartment for your vacation</h1>
            <p className='py-4 text-white sm:text-3xl text-xl'>We have several thousand apartments <br /> for every taste in every country of the globle</p>
            <div className='sm:flex bg-sky-50/40 md:w-3/4 w-full rounded-lg px-3 py-2 mt-10'>
                <h1 className='md:text-5xl text-3xl text-black-800 font-bold'>FIND</h1>
                <ul className='sm:flex  items-center lg:text-2xl text-lg lg:ml-10 ml-3'>
                    <li className='md:px-4 px-7'>Rooms</li>
                    <li className='md:px-4 px-7'>Flats</li>
                    <li className='md:px-4 px-7 '>Hotels</li>
                    <li className='md:px-4 px-7'>Villas</li>
                </ul>

            </div>
            </div>
        </div>
    </div>
  )
}

export default Find