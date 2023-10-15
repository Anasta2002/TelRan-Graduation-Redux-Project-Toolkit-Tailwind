import React from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/icons/Back';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(-1)} className='flex items-center mt-1 cursor-pointer'>
        <Back />
        <span className='ml-2'>go back</span>
    </div>
  )
}
