import React, { forwardRef } from 'react'

const PhoneInput = forwardRef((props, ref) =>  {
  return (
    <input 
        {...props} 
        ref={ref} 
        type='phone' 
        placeholder='+49' 
        className='bg-white border-2 border-white rounded-middle w-full h-16 mb-4 px-5 text-black'
    />
  )
})

export default PhoneInput