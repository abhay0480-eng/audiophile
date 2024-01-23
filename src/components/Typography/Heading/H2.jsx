
import React from 'react'

const H2 = ({children,className}) => {
  return (
    <h2 className={`text-[40px] font-bold leading-[44px] py-2 uppercase ${className} `}>{children}</h2>
  )
}

export default H2