import React from 'react'

const ButtonComponent = ({children,type, className}) => {
  return (
    <>
    {type===1&&<button className={`w-[168px] h-[48px] bg-[#D87D4A] hover:bg-[#FBAF85] flex-shrink-0 text-white text-[13px] font-bold uppercase ${className}`}>{children}</button>}
    {type===2&&<button className={`w-[168px] h-[48px] border-[1px] border-black text-black hover:bg-black flex-shrink-0 hover:text-white text-[13px] font-bold uppercase ${className}`} >{children}</button>}
    {type===3&&<button className={`w-[168px] h-[48px]  hover:text-[#D87D4A]  text-black text-opacity-50 text-[13px] font-bold uppercase ${className}`}>{children}</button> }
    </>
  )
}

export default ButtonComponent