import React, { useContext, useEffect, useState } from 'react'
import summeryApi from '../common'
import Context from '../context'
import displayCurrency from '../helpers/displayCurrency'
import { MdDeleteForever } from "react-icons/md";

const Cart = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const context = useContext(Context)

  const loadingCart = new Array(context.cartProductCount).fill(null)

  const fetchData = async () => {
    try {
      const response = await fetch(summeryApi.viewCartProduct.url, {
        method: summeryApi.viewCartProduct.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      })
      const responseData = await response.json()
  
      if (responseData.success) {
        setData(responseData.data)
      } else {
        console.error("Failed to load cart data:", responseData.message);
      }
    } catch (error) {
      console.error("Error loading cart data:", error);
    } finally {
      setLoading(false);
    }
  }
  

  const handleLoading = async()=>{
    await fetchData()
    setLoading(false);
  }

  useEffect(()=>{
    setLoading(true)
    handleLoading()
    
  },[])

  const increaseCartQty = async (id,qty)=>{
    const response = await fetch(summeryApi.updateProductCart.url,{
      method: summeryApi.updateProduct.method,
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        _id: id,
        quantity : qty + 1
      })
    })

    const responseData = await response.json()

    if (responseData.success) {
      fetchData()
      context.fetchUserAddToCart()
    }
  }

  const decreaseCartQty = async (id,qty)=>{
   if (qty >= 2) {
      const response = await fetch(summeryApi.updateProductCart.url,{
        method: summeryApi.updateProduct.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          _id: id,
          quantity : qty - 1
        })
      })

      const responseData = await response.json()

      if (responseData.success) {
        fetchData()
        context.fetchUserAddToCart()
      }
   }
  }

  const deleteCartProduct = async(id)=>{
    if (id) {
      const response = await fetch(summeryApi.deleteCartProduct.url,{
        method: summeryApi.deleteCartProduct.method,
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          _id: id,
          
        })
      })

      const responseData = await response.json()

      if (responseData.success) {
        fetchData()
        context.fetchUserAddToCart()
      }
   }
  }

  const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0);
  const totalPrice = data.reduce((previousValue, currentValue) => previousValue + (currentValue.quantity * currentValue?.productId?.sellingPrice),0 )

  return (
    <div className='container mx-auto'>
      <div className='text-center text-lg py-2 my-3'>
          {
            data.length === 0 && !loading && (
              <p className='bg-white py-5'>Your cart is empty </p>
            )
          }
      </div>

      <div className='flex flex-col lg:flex-row gap-10 lg:justify-between'>
        {/**view cart */}
        <div className='w-full max-w-3xl'>
           {
            loading ? (
              loadingCart.map((el,index)=>{
                return (
                  <div key={el + 'add to cart'+index} className='w-full bg-slate-200 h-32 my-2 border border-slate-300 animate-pulse rounded'>

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
                    <div className='px-4 py-2 relative'>
                      {/**Delete cart product */}
                      <div className='absolute right-0 text-red-900 rounded-full p-2 hover:bg-red-700 hover:text-white cursor-pointer' 
                            onClick={()=>deleteCartProduct(product?._id)}>
                        <MdDeleteForever/>
                      </div>
                      <h2 className='text-lg lg:text-xl text-ellipsis line-clamp-1'>{productItem?.productName}</h2>
                      <p className='capitalize'>{productItem?.category}</p>
                      <div className='flex items-center justify-between'>
                        <p className='text-red-900 font-medium text-lg'>{displayCurrency(productItem?.sellingPrice)}</p>
                        <p className='text-slate-600 font-semibold text-lg'>{displayCurrency(productItem?.sellingPrice * product?.quantity)}</p>
                      </div>
                      <div className='flex items-center gap-3 mt-1'>
                        <button className='border border-red-900 text-red-900 hover:bg-red-900 hover:text-white w-6 h-6 flex justify-center items-center rounded' 
                          onClick={()=>decreaseCartQty(product?._id ,product?.quantity)}>
                            -
                        </button>
                        <span>{product.quantity}</span>
                        <button className='border border-red-900 text-red-900 hover:bg-red-900 hover:text-white w-6 h-6 flex justify-center items-center rounded' 
                          onClick={()=>increaseCartQty(product?._id ,product?.quantity)}>
                            +
                        </button>
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
            <div className='h-36 bg-white mx-auto' >
              <h2 className='text-white bg-red-900 px-4 py-1'>Summery</h2>
              <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                <p>Quantity</p>
                <p>{totalQty}</p>
              </div>
              <div className='flex items-center justify-between px-4 gap-2 font-medium text-lg text-slate-600'>
                <p>Total price</p>
                
                <p>{ displayCurrency(totalPrice) }</p>
              </div>

              <button className='bg-blue-600 p-2 text-white w-full'>Pay Now</button>

            </div>
          )
        }
       </div>
       
      </div>
    </div>
  )
}

export default Cart
