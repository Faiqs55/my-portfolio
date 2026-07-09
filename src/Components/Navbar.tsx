import React from 'react'

const Navbar = () => {
  return (
    <div className='font-inter flex justify-between px-5 py-7 items-center'>
      <div className='flex md:flex-row flex-col md:gap-20 md:items-center'>
        <span className='font-semibold text-xl'>Faiq S.</span>
        <span className='md:font-semibold md:text-black text-gray-600 md:text-base text-sm'>Full Stack Engineer</span>
      </div>
      <div className='flex gap-20 items-center'>
        <span className='font-semibold'>Time</span>
        <span className='h-3.5 w-3.5 bg-black rounded-full md:block hidden'></span>
      </div>
    </div>
  )
}

export default Navbar
