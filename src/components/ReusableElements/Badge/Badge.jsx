import React from 'react'

export default function Badge({number}) {
  return (
    <div className='w-5 h-5 rounded-full bg-green text-white text-sm flex items-center justify-center absolute right-1 bottom-7'>{number}</div>
  )
}
