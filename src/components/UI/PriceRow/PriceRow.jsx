import React from 'react'
import s from './PriceRow.module.css'

export default function PriceRow({price, discont_price}) {
    const discount = Math.floor(((price - discont_price) / price) * 100)

    return (
        <div>
            { discont_price ?
            <div className={s.price_row}>
                <span className={s.main_price}>${discont_price}</span>
                <span className={s.old_price}>${price}</span>
                <span className={s.discount_price}>-{discount}%</span>
            </div> : 
            <div className={s.price_row}>
                <span className={s.main_price}>${ price}</span>
            </div>
            }
        </div>
    )
}
