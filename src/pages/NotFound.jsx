import React from 'react'
import error from '../assets/404.png'
import Banner from '../components/UI/Banner/Banner'

export default function NotFound() {
  return (
    <Banner>
      <img src={error} alt='not found' style={{margin: '0 auto', backgroundColor: 'transparent' }}/>
    </Banner>
  )
}
