import React from 'react'
import Close from '../../../assets/icons/Close'

export default function CloseButton({onClick}) {
  return (
    <span className='border border-green rounded-full h-8 w-8 absolute flex justify-center items-center right-5 top-5 cursor-pointer' onClick={onClick}>
        <Close />
    </span>
  )
}
