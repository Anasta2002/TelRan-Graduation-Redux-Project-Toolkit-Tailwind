import React from 'react'
import s from './Banners.module.css'
import SubmitForm from '../UI/SubmitForm/SubmitForm';

export default function GreenHomeBanner() {
  return (
    <div className={s.green_banner}>
      <div className={s.green_banner_content}>
        <div className={s.green_banner_info_block}>
            <div className={['h1', s.color].join(' ')}>5% off</div>
            <div  className={['h2', s.color].join(' ')}>On the first order</div>
            <SubmitForm name='Get a discount' className='secondary' />
        </div>
      </div>
    </div>
  )
}
