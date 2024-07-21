import React, { useEffect, useState } from 'react'
import fetchCategoryProducts from '../helpers/fetchCategoryProducts'

const HorizontalCardProduct = ({category, heading}) => {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)
    const loadingList = new Array(13).fill(null)

    const fetchData = async () =>{
        setLoading(true)
        const categoryProducts = await fetchCategoryProducts(category)
        setLoading(false)
        setData(categoryProducts?.data)
    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='container mx-auto px-4 my-6'>
        <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

        <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none '>

            {
                data.map((product,index)=>{
                    return(
                        <div className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white rounded-sm shadow flex'>
                            <div className='bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[140px]'>
                                <img 
                                    src={product.productImage[0]} 
                                    alt='' 
                                    className='h-full object-scale-down hover:scale-110 transition-all'/>
                            </div>
                            <div>
                
                            </div>
                        </div>
                    )
                })
            }
        </div>

     
    </div>
  )
}

export default HorizontalCardProduct
