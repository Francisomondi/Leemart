import React, { useContext, useState } from 'react'
import Icon from './Icon' //as logo
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import summeryApi from '../common';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';


const Header = () => {
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  const context = useContext(Context)

  const navigate = useNavigate()
  const searchInput = useLocation()
  const [search,setSearch] = useState(searchInput?.search?.split('=')[1])

  console.log('searchInput', searchInput?.search.split('=')[1])


const user = useSelector(state=>state?.user?.user)
//console.log('payload',user)


const handleSignOut = async  () =>{
 const deleteData = await fetch(summeryApi.signOut.url,{
    method: summeryApi.signOut.method,
    credentials: 'include'
 })

 const data = await deleteData.json()

 if (data.success) {
  toast.success(data.message)
  dispatch(setUserDetails(null))
  
 }
 if (data.error) {
  toast.error(data.error)
  
 }
}

const handleSearch = (e) =>{

  const {value} = e.target
  setSearch(value)

  if (value) {
    navigate(`/search?q=${value}`)  
  }else{
    navigate('/search')
  }

}
  return (
    <header className='h-16 shadow-md bg-white fixed w-full z-40'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className=''>
              <Link to={"/"}><Icon w={90} h={50}/> {/* as logo*/}</Link>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2 '>
              <input 
                type='text' 
                placeholder='Search for products...' 
                className='w-full outline-none  cursor-pointer'
                onChange={handleSearch} value={search}/>
              <div className='text-lg min-w-[60px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                  <FiSearch />
              </div>
            </div>

            <div className='flex items-center gap-7'>
              <div className='relative flex justify-center'>

                {
                  user?._id && (
                    <div className='text-3xl cursor-pointer relative flex justify-center ' onClick={()=>setMenuDisplay(preve=>!preve)}>
                        {
                          user?.profilePic?(
                            <img src={ user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name}/>
                          ):(
                              <FaRegUser />
                          )
                        }
                
                    </div>

                  )
                }
                
                {
                  menuDisplay && (
                    <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                        <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={'/admin-panel/all-products'} 
                                  className=' whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' 
                                  onClick={()=>setMenuDisplay(preve=>!preve)}>
                                       Admin Panel
                              </Link>

                            )
                          }
                          
                        </nav>
                </div>
 
                  )
                }
                
            
              </div>
              {
                user?._id &&(
                  <Link to={'cart'} className='text-2xl cursor-pointer relative'>
                    <span><MdAddShoppingCart /></span>
                    <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                    <p className='text-sm'>{context?.cartProductCount}</p>
                  </div>
              </Link>
                )
              }
              

              <div>
                {
                  user?._id?(
                      <button onClick={handleSignOut} className='px-3 py-1 text-white bg-red-600 hover:bg-red-800  rounded-full'>log out</button>
                  ):(
                    <Link to={"/login"}>
                      <button className='px-3 py-1 text-white bg-red-600 hover:bg-red-800  rounded-full'>log in</button>
                  </Link>
                  )
                }
              </div>  
                
                
              
            </div>

        </div>
    </header>
  )
}

export default Header
