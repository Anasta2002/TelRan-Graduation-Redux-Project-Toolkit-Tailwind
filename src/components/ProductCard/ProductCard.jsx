import React, { useContext } from 'react'
import s from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { root_url } from '../../global'
import Cart from '../../assets/icons/Cart'
import { useDispatch } from 'react-redux';
import Heart from '../../assets/icons/Heart';
import Button from '../UI/Button/Button';
import { addProductToTotalCart } from '../../store/slices/cart_slice'
import { addProductToWishlist, removeFromWishlist } from '../../store/slices/wishlist_slice'
import PriceRow from '../UI/PriceRow/PriceRow'
import { Context } from '../../context'
import HeartFilled from '../../assets/icons/HeartFilled';
import CartPreviewWindow from '../UI/CartPreviewWindow/CartPreviewWindow'

export default function ProductCard({ id, title, price, image, discont_price, description }) {
  const dispatch = useDispatch()
  const backgroundImage = `url(${root_url}${image})`  

  const { wishlist_products } = useContext(Context)
  const inWishlist = wishlist_products.find(el => el.id === id)

  const addToCartBtn = (e) => {
    dispatch(addProductToTotalCart({ id, title, image, discont_price, description, price }))
  };

  const cartFunctions = () => {
    dispatch(addProductToWishlist({ id, title, image, discont_price, description, price }));
    return <CartPreviewWindow state={{ id, title, image, discont_price, description, price }} />
  }

  const addToWishtBtn = (e) => {
    if (inWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      cartFunctions()
    }
  };

  return (
    <div className={s.card_container}>
      <Link className={s.card} to={`/products/${id}`}>
        <div style={{backgroundImage: `${backgroundImage}`, backgroundSize: 'cover'}} className={s.products_card_img} />
            <PriceRow price={price} discont_price={discont_price} />
            <h4 className={s.card_title}>{title}</h4>        
      </Link>  
      <div className={s.buttons_container}>
        <Button className='primary' onClick={addToWishtBtn} name={!inWishlist ? <Heart/> : <HeartFilled/>} />
        <Button className='primary' onClick={addToCartBtn} name={<Cart />} />
      </div>      
    </div>
  )
}