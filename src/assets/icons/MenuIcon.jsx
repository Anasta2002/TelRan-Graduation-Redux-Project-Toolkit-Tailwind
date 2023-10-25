import React, { useContext } from 'react'
import { Context } from '../../context'

export default function Menuicon() {
    const { isDarkMode } = useContext(Context)
    const fillColor = !isDarkMode ? 'black' : 'white'

    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.2 10.8H2.9C2.4 10.8 2 10.4 2 9.9C2 9.4 2.4 9 2.9 9H20.2C20.7 9 21.1 9.4 21.1 9.9C21.1 10.4 20.7 10.8 20.2 10.8Z" fill={fillColor}/>
          <path d="M14.4 17.8H2.9C2.4 17.8 2 17.4 2 16.9C2 16.4 2.4 16 2.9 16H14.4C14.9 16 15.3 16.4 15.3 16.9C15.3 17.4 14.9 17.8 14.4 17.8Z" fill={fillColor}/>
      </svg>
    )
}
