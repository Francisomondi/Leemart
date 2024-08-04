import React, { useContext, useEffect, useState } from 'react'
import summeryApi from '../common'
import Context from '../context'
import displayCurrency from '../helpers/displayCurrency'

const Cart = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const context = useContext(Context)

  const loadingCart = new Array(context.cartProductCount).fill(null)

  const fetchData = async()=>{
      setLoading(true)
      const response  = await fetch(summeryApi.viewCartProduct.url,{
        method: summeryApi.viewCartProduct.method,
        credentials: 'include',
        headers: {
          'content-type' : 'application/json'
        },
      })
      setLoading(false)

      const responseData = await response.json()

      if (responseData.success) {
        setData(responseData.data)
      }
  }

  useEffect(()=>{
    fetchData()
    setLoading(false)
  },[])
console.log('cart data', data)

  return (
    <div className='container mx-auto'>
      <div className='text-center text-lg py-2 my-3'>
          {
            data.length === 0 && !loading && (
              <p className='bg-white py-5'>No data found </p>
            )
          }
      </div>

      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between'>
        {/**view cart */}
        <div className='w-full max-w-3xl'>
           {
            loading ? (
              loadingCart.map((el)=>{
                return (
                  <div key={el + 'add to cart'} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>

                </div>
                )
              })
                
            ):(
              data.map((product,index)=>{
                const productItem = product.productId

                return(
                  <div key={product?._id}  className='w-full bg-white h-32 my-2 border border-slate-300 rounded grid grid-cols-[128px,1fr]'>
                    <div className='w-32 h-32 bg-slate-200'>
                      <img src={product?.productId?.productImage[0]} alt='' className='w-full h-full object-scale-down mix-blend-multiply'/>
                    </div>
                    <div className='px-4 py-2'>
                      <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{productItem?.productName}</h2>
                      <p className='capitalize'>{productItem?.category}</p>
                      <p className='text-red-600 font-medium text-lg'>{displayCurrency(productItem?.sellingPrice)}</p>
                      <div className='flex items-center gap-3 mt-1'>
                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>-</button>
                        <span>{product.quantity}</span>
                        <button className='border border-red-600 text-red-600 hover:bg-red-600 hover:text-white w-6 h-6 flex justify-center items-center rounded'>+</button>
                      </div>
                    </div>
                </div>
                )
              })
            )
           }
        </div>

        {/**total cart count calculation */}

       <div className='mt-5 lg:mt-0 w-full max-w-sm'>
       {
          loading ? (
            <div className='h-36 bg-slate-200 border border-slate-300 animate-pulse'>
              total
            </div>
          ):(
            <div className='h-36 bg-slate-200'>
              total
            </div>
          )
        }
       </div>
       
      </div>
    </div>
  )
}

export default Cart
