import React, { useContext } from 'react'
import { Context } from '../../context'

export default function Back() {
  const { isDarkMode } = useContext(Context)
  const fillColor = !isDarkMode ? 'black' : 'white'

  return (
    <svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6097 19.7237L5.40391 11.5L13.6097 3.27625L11.0835 0.75L0.333496 11.5L11.0835 22.25L13.6097 19.7237Z" fill={fillColor} fillOpacity="0.87"/>
    </svg>
  )
}
