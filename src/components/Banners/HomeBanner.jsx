import React from 'react'
import { Link } from 'react-router-dom'
import s from './Banners.module.css'
import Button from '../ReusableElements/Button/Button'
import Banner from '../ReusableElements/Banner/Banner'


export default function HomeBanner() {
  return (
    <Banner>
      <div className={s.container}>
        <div className={s.info_block}>
          <h1 className={['h1', 'text-white'].join(' ')}>Sale</h1>
          <h2 className={['h2', 'text-white'].join(' ')}>New season</h2>
          <Link to={'/sales'} className='bg-transparent text-white'>
            {/* <button className={s.sale_btn}>Sale</button> */}
            <Button name='Sale' className={['secondary', s.sale_btn].join(' ')} />
          </Link>
        </div>
      </div>
    </Banner>
  )
}
