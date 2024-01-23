import { Button } from '@radix-ui/themes'
import React from 'react'
import H6 from '../Typography/Heading/H6'

const CategoryCard = ({categoryImage,categoryName}) => {
  return (
    <div className='w-[350px] h-[204px] bg-[#F1F1F1] rounded-lg  relative shadow-xl '>
            <img src={categoryImage} alt='' className=' absolute -top-[30%]  left-1/2 transform -translate-x-1/2 w-[200px]' />
        <div className='absolute  left-1/2 transform -translate-x-1/2 bottom-5'>
            <H6>{categoryName}</H6>
            <Button type="3">SHOP</Button>
        </div>
    </div>
  )
}

export default CategoryCard