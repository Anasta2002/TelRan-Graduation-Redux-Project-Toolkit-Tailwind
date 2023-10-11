import React from 'react'
import s from './ProductDescription.module.css'
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import { root_url } from '../../global'
import { addProductToTotalCart } from '../../store/slices/cart_slice';
import Container from '../UI/Container/Container';
import PriceRow from '../UI/PriceRow/PriceRow';
import { addProductToWishlist } from '../../store/slices/wishlist_slice';


export default function ProductDescription({product}) {
  const dispatch = useDispatch()

  return (
    <Container>
      <h2 className='h2'>{product?.title}</h2>
        <div className={s.container_card}>
          <div style={{backgroundImage: `url(${root_url}${product.image})`, backgroundSize: 'cover'}} className={s.img} />
          <div className={s.card_descr}>
            <h2 className='h2'>{product?.title}</h2>
              <PriceRow price={product.price} discont_price={product?.discont_price} />
              <div className={s.buttons_descr}>
                <Button onClick={() => dispatch(addProductToTotalCart({...product}))} name='Add to cart' className='primary' />
                <Button onClick={() => dispatch(addProductToWishlist({...product}))} name='Add to wishlist' className='primary' />                    
              </div>
              <div className='mt-10'>
                  <h4 className='h4'><b>Description:</b></h4>
                  <p className='text-xl'>{product.description}</p>                             
              </div>
          </div>
        </div>
    </Container>
  )
}


