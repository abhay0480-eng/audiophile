import React, { useEffect, useState } from 'react'
import Span2 from '../components/Typography/Span/Span2'
import H1 from '../components/Typography/Heading/H1'
import P from '../components/Typography/Paragraph/P'
import ButtonComponent from '../components/Buttons/ButtonComponent'
import SiteLoader from '../components/SiteLoader/SiteLoader'
import CategoryCard from '../components/HomePageComponents/CategoryCard'
import H2 from '../components/Typography/Heading/H2'
import H4 from '../components/Typography/Heading/H4'

const Home = () => {
  const [myBoolean, setMyBoolean] = useState(true);
  return (
    <div className=''>
      {/* {myBoolean&&<SiteLoader/>} */}
      <div className='bg-[#0E0E0E]  w-full '>
        <div className='w-4/5 grid grid-cols-2 justify-items-center mx-auto h-[700px] relative'>
          <div className='flex justify-center items-center z-50'>
            <div className='pr-10'>
            <Span2>NEW PRODUCT</Span2>
            <H1 className="!text-white ">XX99 Mark II Headphones</H1>
            <P className="!text-white !text-opacity-75 pr-20">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</P>
            <ButtonComponent className="mt-10" type={1}>See Product</ButtonComponent>
            </div>
          </div>
          {/* <div className="bg-[url('/assets/home/desktop/image-hero.jpg')] w-full h-full bg-cover bg-right bg-blend-color-burn ">
          </div> */}
          <div className=''>
            <img src="/assets/home/desktop/image-hero.jpg" alt="" className='object-cover w-[100%] h-full object-right absolute left-0 mix-blend-difference'/>
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto '>
          <div className='grid grid-cols-3 gap-5 justify-items-center text-center my-32'>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-headphones.png" categoryName="HEADPHONES"/>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-speakers.png" categoryName="SPEAKERS"/>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-earphones.png" categoryName="EARPHONES"/>
          </div>

          <div className='bg-[#D87D4A] grid grid-cols-2 rounded-lg h-[560px] w-full relative z-[10000]'>
            <img src='/assets/home/desktop/pattern-circles.svg' alt='' className='absolute' />
            <div className='flex justify-center items-end z-20'>
              <img src='/assets/home/desktop/image-speaker-zx9.png' alt='' className='w-[410px]' />
            </div>
            <div className='z-50 flex justify-center'>
              <div className=' mt-20'>
                <H2 className="text-white text-[56px] w-1/3">ZX9 SPEAKER</H2>
                <P className="!text-white !text-opacity-75 pr-20 w-2/3">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</P>
                <ButtonComponent type={1} className="bg-black hover:border-[#4C4C4C] mt-7 mb-10 hover:bg-[#4C4C4C] cursor-pointer text-white">See Product</ButtonComponent>
              </div>
            </div>
          </div>

          <div className={` bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] flex justify-start pl-10 items-center bg-no-repeat w-full bg-cover my-12 z-[999999999] h-[350px]`}>
          <div className=''>
            <H4>ZX7 SPEAKER</H4>
            <ButtonComponent type={3}>See Product</ButtonComponent>
          </div>
          </div>
      </div>
     
    </div>
  )
}

export default Home