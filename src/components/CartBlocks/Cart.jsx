import React from 'react'
import s from './Cart.module.css'
import EmptyCartMobileLight from '../../assets/icons/EmptyCartMobileLight';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cleanCart, decrementCart, deleteProductFromCart, incrementCart } from '../../store/slices/cart_slice';
import { root_url } from '../../global';
import SubmitForm from '../UI/SubmitForm/SubmitForm';
import Button from '../UI/Button/Button';
import Delete from '../../assets/icons/Delete';
import ArrowBack from '../../assets/icons/ArrowBack';

export default function Cart() {
  const cart_products = useSelector(state => state.cart_products?.list)
  const dispatch = useDispatch()

  return (    
    <div className={s.cart_elements}>
      <Link to={'/products'} className={s.button_back}><ArrowBack /><span>Return to the products</span></Link>
      <p className={s.clean_cart} onClick={() => dispatch(cleanCart())}><span>Empty the cart </span><Delete /></p>
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
                      <div className={s.cart_card_content_left}>
                        <p>{el.title}</p>
                        <div className={s.increment_decrement_btns}>
                          <Button onClick={() => dispatch(decrementCart(el.id))} className='primary' name='-' />
                          <span>{el.count}</span>
                          <Button onClick={() => dispatch(incrementCart(el.id))} className='primary' name='+' />
                        </div>
                      </div>
                      <div className={s.cart_card_content_right}>
                        <span>${(el.discont_price ? el.discont_price * el.count : el.price * el.count).toFixed(2)}</span>
                        <span className={s.delete_area} onClick={() => dispatch(deleteProductFromCart(el.id))}><Delete /></span>
                      </div>
                    </div>
                  )}
                </div>

                <div className={s.order_details}>
                    <div className='h3'>Order details</div>
                    <p className='h4'>Total: 
                      {cart_products.reduce((acc, { discont_price, price, count }) => {
                        const actual_price = discont_price ? discont_price : price;
                        return (acc + actual_price * count);
                      }, 0).toFixed(2)}
                    </p>                     
                    <SubmitForm className='primary' name='Order' />
                </div>
              </div>
            }
        </div>
    </div>
  )
}
