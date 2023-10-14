import React, { useState } from 'react'
import s from './CartPreviewWindow.module.css'

export default function CartPreviewWindow({ id, title, image, discont_price, description, price }) {
  const [showWindow, setShowWindow] = useState(true)
  
  return (
    <div className='w-full h-full'>
        {showWindow &&
            <div className={s.window_wrapper}>
                {/* <span><Close</span> */}
            </div>
        }
    </div>
  )
}
