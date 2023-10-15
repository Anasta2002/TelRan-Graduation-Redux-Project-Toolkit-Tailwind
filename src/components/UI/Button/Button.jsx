import React from 'react'
import s from './Button.module.css'

export default function Button({name, onClick, className, icon}) {
  return (
    <button 
        onClick={onClick} 
        className={className === 'primary' ? s.button_primary : s.button_secondary}
    >
        {name}
        {icon}
    </button>
  )
}
