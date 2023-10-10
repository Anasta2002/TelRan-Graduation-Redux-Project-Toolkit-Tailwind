import React from 'react'
import s from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { root_url } from '../../global'
import Cart from '../../assets/icons/Cart'
import { useDispatch } from 'react-redux';
import Heart from '../../assets/icons/Heart';
import Button from '../UI/Button/Button';
import { addProductToTotalCart } from '../../store/slices/cart_slice'
import { addProductToWishlist } from '../../store/slices/wishlist_slice'
import PriceRow from '../UI/PriceRow/PriceRow'
import { useLocation } from 'react-router-dom'

export default function ProductCard({ id, title, price, image, discont_price, description }) {
  const dispatch = useDispatch()
  const backgroundImage = `url(${root_url}${image})`  

  const location = useLocation();
  const isWishlist = location.pathname === '/wishlist'

  const addToCartBtn = (e) => {
    e.stopPropagation()
    dispatch(addProductToTotalCart({ id, title, image, discont_price, description, price }))
  };

  const addToWishtBtn = (e) => {
    e.stopPropagation()
    dispatch(addProductToWishlist({ id, title, image, discont_price, description, price  }))
  };

  const handleCardClick = (e) => {
    e.stopPropagation()
  };

  return (
    <div className={s.card_container}>
      <Link className={s.card} to={`/products/${id}`} onClick={handleCardClick} >
        <div style={{backgroundImage: `${backgroundImage}`, backgroundSize: 'cover'}} className={s.products_card_img} />
        { !isWishlist && <PriceRow price={price} discont_price={discont_price} /> }
        <h4 className={s.card_title}>{title}</h4>
      </Link>  
      { !isWishlist && 
        <div className={s.buttons_container}>
          <Button className='primary' onClick={addToWishtBtn} name={<Heart />} />
          <Button className='primary' onClick={addToCartBtn} name={<Cart />} />
        </div>      
      }
    </div>
  )
}