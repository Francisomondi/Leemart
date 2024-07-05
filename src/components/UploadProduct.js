import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import productCategory from '../helpers/productCategory'; 
import { IoIosCloudUpload } from "react-icons/io";

const UploadProduct = ({onClose}) => {

  const [data,setData] = useState(
    {
      productName: '',
      brandName: '',
      category: '',
      productImage: [],
      description: '',
      price: '',
      sellingprice: ''
    }
  )

  const [uploadProductImageInput,setUploadProductImageInput] = useState()
 const handleOnchange = (e)=>{

 }

 const handleProductUpload = (e)=>{

  const file = e.target.files[0]
  setUploadProductImageInput()
console.log('file', file)
 }

  return (
    <div className='fixed w-full h-full bg-slate-200 bg-opacity-40 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

            <div className='flex justify-between items-center'>   
                <h2 className='font-bold text-lg'>Upload products</h2> 
                <div className='w-fit ml-auto text-2xl hover:text-red-600 cursor-pointer' onClick={onClose}
                      >
                    <IoClose />
                </div>
            </div>

            <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5'>
              <label htmlFor='productName'>Product Name</label>
              <input 
                  type='text' 
                  id='productName' 
                  placeholder='Product name' 
                  value={data.productName} 
                  name = 'productName'
                  onChange={handleOnchange}
                  className='p-2 bg-slate-100 border rounded-md'/>

              <label htmlFor='brandName' className='mt-3'>Brand Name</label>
              <input 
                  type='text' 
                  id='brandName' 
                  placeholder='Brand name' 
                  value={data.brandName} 
                  name='brandName'
                  onChange={handleOnchange}
                  className='p-2 bg-slate-100 border rounded-md'/>
                  
              <label htmlFor='category' className='mt-3'>Category</label>
              <select value={data.category} 
                      className='p-2 bg-slate-100 border rounded-md'>
                        {
                          productCategory.map((el,index)=>{
                            return(
                            <option 
                              value={el.value} 
                              key={el.value+index}>
                                {el.label} 
                            </option>)
                            
                          })
                        }

              </select>
              

              <label htmlFor='productImage'>Product Image</label>
              <label htmlFor='uploadImageInput'>
                  <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>  
                      <div className='text-slate-500 flex justify-center items-center flex-col gap-2'>
                        <span className='text-4xl'><IoIosCloudUpload /></span>
                        <p className='text-sm'>Upload Product Image</p>
                        <input
                          type='file'
                          id='uploadImageInput'
                          className='hidden' onChange={handleProductUpload}/>
                      </div>
                  </div>
              </label>
              <div>
                <img src='' alt='' width={80} height={80}  className='bg-slate-100 border'/>
              </div>

            </form>            
        </div>
    </div>
  )
}

export default UploadProduct
