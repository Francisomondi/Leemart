import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchProduct = () => {
    const querry = useLocation()
    console.log('querry', querry)
  return (
    <div>
      seach product
    </div>
  )
}

export default SearchProduct
