import React from 'react'
import ProductCategory from '../components/ProductCategory'
import BannerProduct from '../components/BannerProduct'
import HorizontalProductCard from '../components/HorizontalProductCard'


const Home = () => {
  return (
    <div>
      <ProductCategory/>
      <BannerProduct/>
      <HorizontalProductCard category= {'airpods'} heading={'Top Airpods'}/>
      <HorizontalProductCard category= {'speakers'} heading={'Popular Speakerss'}/>
     
    </div>
  )
}

export default Home
