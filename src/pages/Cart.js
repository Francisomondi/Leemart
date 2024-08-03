import React, { useContext, useEffect, useState } from 'react'
import summeryApi from '../common'
import Context from '../context'

const Cart = () => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const context = useContext(Context)

  const loadingCart = new Array(context.cartProductCount.fill(null))

  const fetchData = async()=>{
      setLoading(true)
      const response  = await fetch(summeryApi.viewCartProduct.url,{
        method: summeryApi.viewCartProduct.method,
        credentials: 'include',
        headers: {
          'content-type' : 'application/json'
        },
      })
      //setLoading(false)

      const responseData = await response.json()

      if (responseData.success) {
        setData(responseData.data)
      }
  }

  useEffect(()=>{
    fetchData()
    //setLoading(false)
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
      <div>
        {/**view cart */}
        <div className='w-full max-w-3xl'>
           {
            loading ? (
              loadingCart.map((el)=>{
                return (
                  <div key={el} className='w-full bg-slate-200 h-32 my-1 border border-slate-300 animate-pulse rounded'>

                  </div>
                )
              })
                
            ):(
              <div>
                andlskj
              </div>
            )
           }
        </div>
      </div>
    </div>
  )
}

export default Cart
