import React from 'react'

export default function Container({children}) {
  return (
    <div className='w-11/12 h-full mx-auto xl:w-9/12 bg-transparent relative'>
        {children}
    </div>
  )
}
