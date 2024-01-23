
import React from 'react'

const H1 = ({children, className}) => {
  return (
    <h1 className={`text-[56px] font-bold leading-[58px] uppercase py-6 ${className}`} >{children}</h1>
  )
}

export default H1