import React, { useEffect, useState } from 'react'
import Span2 from '../components/Typography/Span/Span2'
import H1 from '../components/Typography/Heading/H1'
import P from '../components/Typography/Paragraph/P'
import ButtonComponent from '../components/Buttons/ButtonComponent'
import SiteLoader from '../components/SiteLoader/SiteLoader'

const Home = () => {
  const [myBoolean, setMyBoolean] = useState(true);

  // useEffect(() => {
  //   // Function to flip the boolean value to false after 15 seconds
  //   const flipToFalse = () => {
  //     setMyBoolean(false);
  //   };

  //   // Flip the boolean value to true on component mount
  //   setMyBoolean(true);

  //   // Set up a timeout to flip the boolean value to false after 15 seconds
  //   const timeoutId = setTimeout(flipToFalse, 20000);

  //   // Clean up the timeout to avoid memory leaks
  //   return () => clearTimeout(timeoutId);
  // }, []); 
  return (
    <div className=' '>
      {/* {myBoolean&&<SiteLoader/>} */}
      <div className='bg-[#0E0E0E]  w-full '>
        <div className='w-4/5 grid grid-cols-2 justify-items-center mx-auto h-[700px] relative'>
          <div className='flex justify-center items-center z-50'>
            <div className='px-10'>
            <Span2>NEW PRODUCT</Span2>
            <H1 className="!text-white ">XX99 Mark II Headphones</H1>
            <P className="!text-white !text-opacity-75">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</P>
            <ButtonComponent type={1}>See Product</ButtonComponent>
            </div>
          </div>
          {/* <div className="bg-[url('/assets/home/desktop/image-hero.jpg')] w-full h-full bg-cover bg-right bg-blend-color-burn ">
          </div> */}
          <div className=''>
            <img src="/assets/home/desktop/image-hero.jpg" alt="" className='object-cover w-[100%] h-full object-right absolute left-0 mix-blend-difference'/>
          </div>
        </div>
      </div>
      <div className='w-4/5'>

      </div>
    </div>
  )
}

export default Home