
import React from 'react'

const P = ({children,className}) => {
  return (
    <p className={`text-[15px] py-2 font-medium ${className}`}>{children}</p>
  )
}

export default P