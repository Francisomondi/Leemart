import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-200 text-white'>
     <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7 '>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
      <span className='text-red-950'>Leemart, </span> Best E-shop in Nairobi & its Environ</h1>

      <div>
        <input type='text' placeholder='Enter your phone number'
        className='text-gray-800 w-full sm:w-72 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
        <button className='bg-red-900 hover:bg-red-600 duration-300 px-5 py-2.5 font-[poppins] rounded-md text-white md:w-auto w-full'>
          Request a Quote
        </button>
      </div>
        
     </div>
    </footer>
  )
}

export default Footer
