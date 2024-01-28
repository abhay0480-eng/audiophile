
import React from 'react'

const H2 = ({children,className}) => {
  return (
    <h2 className={`lg:text-[40px] text-[28px] text-center lg:text-left font-bold leading-[44px] py-2 uppercase ${className} `}>{children}</h2>
  )
}

export default H2