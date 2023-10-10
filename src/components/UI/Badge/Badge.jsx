import React from 'react'

export default function Badge({number}) {
  return (
    <div className='w-5 h-5 rounded-full z-10 bg-green text-white text-sm flex items-center justify-center absolute left-20 bottom-5'>{number}</div>
  )
}
