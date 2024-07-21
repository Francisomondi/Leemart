import React from 'react'
import ProductCategory from '../components/ProductCategory'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'

const Home = () => {
  return (
    <div>
      <ProductCategory/>
      <BannerProduct/>
      <HorizontalCardProduct category= {'airpods'} heading={'Tops Airpods'}/>
    </div>
  )
}

export default Home
