import React from 'react'
import s from './Banner.module.css'


export default function Banner({children}) {
  return (
    <div className={s.banner}> 
        {children}
    </div>
  )
}
