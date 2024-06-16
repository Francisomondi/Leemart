import React from 'react'
import Icon from './Icon' //as logo
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}><Icon w={90} h={50}/> {/* as logo*/}</Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 '>
         <input type='text' placeholder='Search for products...' className='w-full outline-none  cursor-pointer'/>
        <div className='text-lg min-w-[60px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
        <FiSearch />
         </div>
        </div>

        <div className='flex items-center gap-7'>
          <div className='text-2xl cursor-pointer'>
          <FaRegUser />
          </div>

          <div className='text-2xl cursor-pointer relative'>
          <span><MdAddShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
             <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"}><button className='px-3 py-1 text-white bg-red-600 hover:bg-red-800  rounded-full'>log in</button></Link>
            
            <button className='px-3 py-1 text-white bg-red-600 hover:bg-red-800  rounded-full'>log out</button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header