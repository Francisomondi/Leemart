import React, { useState } from 'react'
import loginIcons from '../assets/signin.gif'
import { IoEyeOffSharp } from "react-icons/io5";
import {Link} from "react-router-dom";

const Login = () => {

  const [showPassword,setShowPassword]= useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = (e)=>{
    const {name,value} = e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]: value
      }
    })
  }

  console.log("form data" ,data)

  const handleSubmit = (e)=>{
    e.preventDefault()

  }

  return (
    <section id='login'>
      <div className='mx-auto container p-4'>
        <div className='bg-white p-6 w-full max-w-sm mx-auto rounded'>
            <div className='w-20 h-20 mx-auto'>
              <img src={loginIcons} alt='login icon'/>
            </div>

            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
              <div className='grid'>
                <label>Email: </label>
                <div className='bg-slate-100 p-2'>
                  <input 
                    type='email' 
                    name='email'
                    placeholder='Enter your Email...' 
                    value={data.email}
                    onChange={handleOnChange}
                    className='w-full h-full outline-none bg-transparent'/>
                </div>
                
              </div>
              <div>
                <label>Password: </label>
                <div  className='bg-slate-100 p-2 flex'>
                   <input 
                   type={showPassword ?"text":"password"} 
                   placeholder='Enter your password...' 
                   name='password'
                   value={data.password}
                   onChange={handleOnChange}
                   className='w-full h-full outline-none bg-transparent' /> 
                   <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                    <span><IoEyeOffSharp/></span>
                   </div>
                </div>
                <Link to={'/forgot-password'} 
                   className='block w-fit ml-auto hover:underline hover:text-red-600'>
                     Forgot password?
                </Link>
                
              </div>
              <button className='bg-red-600 hover:bg-red-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
            </form>

            <p className='my-5'>Do not have an account? <Link to={'/sign-up'} className='hover:text-red-700 hover:underline'>SignUp</Link></p>
        </div>
      </div>
      
    </section>
  )
}

export default Login
