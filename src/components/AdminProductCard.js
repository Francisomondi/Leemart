import React, { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import EditProduct from './EditProduct';

const AdminProductCard = ({data,fetchData}) => {
    const [editProduct, setEditProduct]= useState(false)
  return (
    <div className='bg-white p-4 rounded'>
        <img src={data?.productImage[0]} alt='' width={150} height={150}/>
        <h1>{data?.productName}</h1>

        <div className='w-fit ml-auto p-2 bg-green-100 hover:bg-green-600 rounded-full hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)}>
              <CiEdit/>
        </div>

        {
        editProduct && (
          <EditProduct  productData={data} onClose={()=>setEditProduct(false)} fetchData={fetchData}/>
  
      )}

        
    </div>
  )
}

export default AdminProductCard
