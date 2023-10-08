import React, { useEffect } from 'react'
import s from './Cart.module.css'
import EmptyCartMobileLight from '../../assets/icons/EmptyCartMobileLight';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { decrementCart, incrementCart } from '../../store/slices/cart_slice';
import { root_url } from '../../global';
import PhoneNumberForm from '../UI/PhoneNumberForm/PhoneNumberForm';

export default function Cart({cart_products}) {
  const dispatch = useDispatch()
  
  const total = cart_products.reduce((acc, { price, count }) => acc + price * count, 0);

  useEffect(() => {
      localStorage.setItem('shopping_cart', JSON.stringify(cart_products))
  }, [cart_products])

  return (    
  <div className={s.cart_elements}>
      <h1 className={[s.empty_cart, 'h2'].join(' ')}>Shopping cart</h1>
        <div className={s.precart}>
            {cart_products.length === 0 ? 
              <div className={[s.empty_cart, 'h3'].join(' ')}>
                <EmptyCartMobileLight />
                <p className='h4'>Your cart is empty, please select something 
                <Link to={'/products'}><b> here</b></Link></p>
              </div> :
              <div className={s.full_cart_content}>
                <div className={s.cart_cards}>
                  {cart_products.map(el => 
                    <div key={el.id} className={s.card}>
                      <div style={{backgroundImage: `url(${root_url}${el.image})`}} className={s.image} alt='product' />
                      <div>
                        <p>{el.title}</p>
                        <div className='flex'>
                          <button onClick={() => dispatch(decrementCart(el.id))} className={s.increment_decrement_btns}>-</button>
                          <span>{el.count}</span>
                          <button onClick={() => dispatch(incrementCart(el.id))} className={s.increment_decrement_btns}>+</button>
                        </div>
                      </div>
                      <div className='flex'>
                        <span>${el.price * el.count}</span>
                        <span>{el.discount_price}</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={s.order_details}>
                    <p className='h3'>Order details</p>
                    <p className='h4'>Total: {total}</p>                     
                    <PhoneNumberForm className='primary' name='Order' />
                </div>
              </div>
            }
        </div>
    </div>
  )
}
