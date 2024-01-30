import React, { useEffect, useState } from 'react'
import Span2 from '../components/Typography/Span/Span2'
import H1 from '../components/Typography/Heading/H1'
import P from '../components/Typography/Paragraph/P'
import ButtonComponent from '../components/Buttons/ButtonComponent'
import CategoryCard from '../components/HomePageComponents/CategoryCard'
import H2 from '../components/Typography/Heading/H2'
import H4 from '../components/Typography/Heading/H4'

const Home = () => {
  const [myBoolean, setMyBoolean] = useState(true);
  return (
    <div className=''>
      <div className='bg-[#0E0E0E]  w-full '>
        <div className='lg:w-4/5 w-full px-4 lg:px-0 lg:grid lg:grid-cols-2 justify-items-center mx-auto h-[600px] lg:h-[700px] relative'>
          <div className='h-full flex justify-center items-center'>
          <div className='flex justify-center items-center z-50 text-center lg:text-left'>
            <div className='lg:pr-10 mx-auto'>
            <Span2>NEW PRODUCT</Span2>
            <H1 className="!text-white ">XX99 Mark II Headphones</H1>
            <P className="!text-white !text-opacity-75 lg:pr-20">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</P>
            <ButtonComponent className="mt-10" type={1}>See Product</ButtonComponent>
            </div>
          </div>
          </div>
          
          <div className=''>
            <img src="/assets/home/desktop/image-hero.jpg" alt="" className='object-cover w-[100%] h-full object-right absolute left-0 mix-blend-difference hidden lg:block'/>
            <img src="/assets/home/mobile/image-header.jpg " alt="" className='object-fill top-0 block lg:hidden w-[100%] h-full object-center absolute left-0 mix-blend-difference'/>
          </div>
        </div>
      </div>
      <div className='lg:w-4/5 mx-auto w-full px-4 lg:px-0'>
          <div className='grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-28 justify-items-center text-center my-32'>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-headphones.png" categoryName="HEADPHONES"/>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-speakers.png" categoryName="SPEAKERS"/>
            <CategoryCard  categoryImage="/assets/shared/desktop/image-category-thumbnail-earphones.png" categoryName="EARPHONES"/>
          </div>

          <div className='bg-[#D87D4A] grid grid-rows-2 lg:grid-cols-2 rounded-lg h-[560px] w-full relative z-[10000]'>
            <img src='/assets/home/desktop/pattern-circles.svg' alt='' className='absolute' />
            <div className='flex justify-center items-end z-20'>
              <img src='/assets/home/desktop/image-speaker-zx9.png' alt='' className='w-[410px] hidden lg:block' />
              <img src='/assets/home/mobile/image-speaker-zx9.png' alt='' className='w-[150px] lg:hidden block' />
            </div>
            <div className='z-50 flex justify-center'>
              <div className=' mt-20'>
                <H2 className="text-white text-[56px] w-1/3">ZX9 SPEAKER</H2>
                <P className="!text-white !text-opacity-75 pr-20 w-2/3">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</P>
                <ButtonComponent type={1} className="bg-black hover:border-[#4C4C4C] mt-7 mb-10 hover:bg-[#4C4C4C] cursor-pointer text-white">See Product</ButtonComponent>
              </div>
            </div>
          </div>

          <div className={` bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] flex justify-start pl-10 items-center bg-no-repeat w-full bg-cover my-12  h-[350px] rounded-xl`}>
          <div className=''>
            <H4>ZX7 SPEAKER</H4>
            <ButtonComponent type={3}>See Product</ButtonComponent>
          </div>
          </div>

          <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-x-5 my-7'>
            <div className="bg-[url('/assets/home/desktop/image-earphones-yx1.jpg')] bg-no-repeat rounded-lg h-[320px]"></div>
            <div className='bg-[#F1F1F1] rounded-lg flex justify-start p-5 items-center'>
              <div className=''>
                <H4>YX1 EARPHONES</H4>
                <ButtonComponent type={3}>See Product</ButtonComponent>
              </div>
            </div>
          </div>

          <div className='grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 gap-x-10  my-7 mt-32'>
            <div className='flex justify-start items-center px-5 order-2 lg:order-none'>
              <div className=''>
              <H2>Bringing you the <span className='text-[#D87D4A]'>best</span> audio gear</H2>
              <P>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</P>
              </div>
            </div>
            <div className="bg-[url('/assets/shared/desktop/image-best-gear.jpg')] bg-no-repeat rounded-lg h-[600px] hidden lg:block"></div>
            <div className="bg-[url('/assets/shared/mobile/image-best-gear.jpg')] bg-no-repeat rounded-lg lg:h-[600px] bg-contain block lg:hidden"></div>
          </div>
      </div>
    </div>
  )
}

export default Home