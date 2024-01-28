
import React from 'react'

const H1 = ({children, className}) => {
  return (
    <h1 className={`lg:text-[56px] text-[36px] text-center text-pretty lg:text-left font-bold leading-[58px] uppercase py-6 ${className}`} >{children}</h1>
  )
}

export default H1