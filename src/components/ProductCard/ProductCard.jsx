import React from 'react'
import s from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { root_url } from '../../global'
import Cart from '../../assets/icons/Cart'
import { useDispatch } from 'react-redux';
import Heart from '../../assets/icons/Heart';
import Button from '../ReusableElements/Button/Button';
import { addProductToTotalCart } from '../../store/slices/cart_slice'
import { addProductToWishlist } from '../../store/slices/wishlist_slice'

export default function ProductCard(product) {
  const dispatch = useDispatch()

  const discount = Math.floor(((product.price - product.discont_price) / product.price) * 100);
  const backgroundImage = `url(${root_url}${product.image})`

  return (
    <div className={s.card_container}>
      <Link className={s.card} to={`/products/${product.id}`}>
        <div style={{backgroundImage: `${backgroundImage}`, backgroundSize: 'cover'}} className={s.products_card_img}>
          <div className={s.hover_buttons_container}>
            <Button className='primary' onClick={() => dispatch(addProductToTotalCart({...product}))} name={<Cart />} />
            <Button className='primary' onClick={() => dispatch(addProductToWishlist({...product}))} name={<Heart />} />
          </div>  
        </div>
        <div>
          { product.discont_price ?
            <div className={s.price_row}>
              <span className={s.main_price}>${product.discont_price}</span>
              <span className={s.old_price}>${product.price}</span>
              <span className={s.discount_price}>-{discount}%</span>
            </div> : 
            <div className={s.price_row}>
              <span className={s.main_price}>${product.price}</span>
            </div>
          }
        </div>
        <h6 className={s.card_title}>{product.title}</h6>
      </Link>   
    </div>
  )
}