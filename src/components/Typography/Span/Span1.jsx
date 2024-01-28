import React from 'react'

const Span1 = ({children,className}) => {
  return (
    <span className={`text-[13px] font-bold py-2 text-[#D87D4A] uppercase ${className}`}>{children}</span>
  )
}

export default Span1