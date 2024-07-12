import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import summeryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'

const Products = () => {
const [openUploadproduct, setOpenUploadProduct] = useState(false)
const [allProducts,setAllProducts] = useState([])

const fetchAllProducts = async ()=>{
  const  response= await fetch(summeryApi.allProduct.url)
  const dataResponse = await response.json()
  setAllProducts(dataResponse?.data || [])
   
}

useEffect(()=>{
  fetchAllProducts()
},[])

  return (
    <div>
      <div className='bg-white py-2 px-2 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Products</h2>
          <button 
            className='border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all py-1 px-3 rounded-full'
            onClick={()=>setOpenUploadProduct(true)}>
              Upload Products
          </button>
      </div>

      {/**Display all products */}
      <div className='flex items-center gap-5 py-3'>
        { 
        //allProducts && Products.length>0()  
          allProducts.map((product,index)=>{
            return (
              <AdminProductCard data={product} key={index+ 'allProduct'} fetchData={fetchAllProducts}/>
              
            )
          })
        } 
 
      </div>

      {/**upload product */}
      {
        openUploadproduct && (
         <UploadProduct onClose={()=>setOpenUploadProduct(false)}/>
  
      )}
      
    </div>
  )
}

export default Products
