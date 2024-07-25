import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import summeryApi from '../common'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import displayCurrency from '../helpers/displayCurrency';

const ProductDetails = () => {
  const [data,setData] = useState({
    productName: '',
    brandName: '',
    category: '',
    productImage: [],
    description: '',
    price: '',
    sellingPrice: ''
  })
  const params = useParams()
  const [loading,setLoading] = useState(true)
  const productListLoading = new Array(5).fill(null)
  const [activeImage,setActiveImage] = useState('')
 

  const fetchProductDetails = async () =>{
    setLoading(true)

    const response = await fetch(summeryApi.productDetails.url,{
      method: summeryApi.productDetails.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        productId: params?.id
      })
    })  

    if (!response.ok) {
      throw new Error(`Failed to fetch user details: ${response.statusText}`);
    }

    setLoading(false)

    const dataResponse = await response.json()
    setData(dataResponse?.data)
    setActiveImage(dataResponse?.data?.productImage[0])
  }
   console.log('data', data)

  useEffect(()=>{
    fetchProductDetails()
  },[])

  const handleMouseImageHover = (image)=>{
    setActiveImage(image)
  }

  return (
    <div className='container mx-auto p-4'>
      <div className='min-h-[200px] flex flex-col lg:flex-row gap-2'>
        {/**product image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] lg:h-96 lg:w-96 bg-slate-200'>
            <img src={activeImage} 
              alt='product img'
              className='h-full w-full object-scale-down mix-blend-multiply'/>
          </div>
          <div className='h-full'>
            {
              loading ? (
               <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                  {
                     productListLoading.map(el => {
                      return(
                        <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={'loading image'}>
                         
                        </div>
                      )
                    })
                  }
               </div>
                
              ): (
                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-none h-full'>
                  {
                    data?.productImage?.map((image,index) => {
                      return(
                        <div className='h-20 w-20 bg-slate-200 rounded p-1' key={index}>
                           <img src={image} 
                            className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer' 
                            alt='product'
                            onMouseEnter={()=>handleMouseImageHover(image)}
                            />
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
          </div>
        </div>

        {/**product datails */}
        <div className='flex flex-col gap-1'>
            <p className='bg-red-200 text-red-500 px-2 rounded-full inline-block w-fit'>{data?.brandName}</p>
            <h2 className='text-2xl lg:text-4xl font-medium'>{data?.productName}</h2>
            <p className='capitalize text-slate-400'>{data?.category}</p>

            <div className='flex text-yellow-500 items-center gap-1'>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalfAlt/>
            </div>

            <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
              <p className='text-red-600'>{displayCurrency(data.sellingPrice)}</p>
              <p className='text-slate-400 line-through'>{displayCurrency(data.price)}</p>
            </div>

            <div className=''>
              <p className='text-slate-600 font-medium my-1'>Description: </p>
              <p className='text-medium'>{data?.description}</p>              
            </div>

            <div className='flex items-center gap-3 my-2'>
              <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[150px] text-red-600 font-medium hover:bg-red-600 hover:text-white'>Buy</button>
              <button 
                className='border-2 border-red-600 rounded px-3 py-1 min-w-[150px] font-medium text-white bg-red-600 hover:text-red-600 hover:bg-white'>
                  Add To Cart
              </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default ProductDetails
