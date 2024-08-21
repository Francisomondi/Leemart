import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
     <div className='container md:flex md:justify-between md:items-center sm:px-12 py-7'>
      <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
      <span className='text-red-950'>Leemart, </span> Best E-shop in Nairobi & its Environ</h1>

      <div>
        <input type='text' placeholder='Enter your phone number'
        className='text-gray-800 sm:w-72 sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
        <button className='bg-teal-400'>Request a Quote</button>
      </div>
        {/*<p className='text-center font-bold' title='web dev'>Francis Omondi @2024</p>*/}
     </div>
    </footer>
  )
}

export default Footer
