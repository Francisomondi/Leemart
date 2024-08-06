import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import summeryApi from '../common'

const SearchProduct = () => {
    const query = useLocation()

    console.log('query', query.search)

    const fetchProduct = async() => {
      const response = await fetch(summeryApi.searchProduct.url + query.search)
      const dataResponse = await response.json()
      
      console.log('dataResponse', dataResponse)
    }

    useEffect(()=>{
      fetchProduct()
    },[query])

  return (
    <div>
      seach product
    </div>
  )
}

export default SearchProduct
