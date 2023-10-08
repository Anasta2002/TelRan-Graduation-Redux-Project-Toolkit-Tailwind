import React from 'react'
import s from './ProductDescription.module.css'
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import { root_url } from '../../global'
import { addProductToTotalCart } from '../../store/slices/cart_slice';
import Container from '../UI/Container/Container';
import PriceRow from '../UI/PriceRow/PriceRow';
import { addProductToWishlist } from '../../store/slices/wishlist_slice';


export default function ProductDescription({product_state}) {

  const dispatch = useDispatch()
  // const addToCartBtn = () => dispatch(addProductToTotalCart({ id, title, price, image, discont_price, description }))
  const addToWishBtn = () => dispatch(addProductToWishlist({ ...product_state}))

  return (
    <Container>
      <h2 className='h2'>{product_state.title}</h2>
        <div className={s.container_card}>
          {product_state.map(el => 
            <>
              <div style={{backgroundImage: `url(${root_url}${el.image})`, backgroundSize: 'cover'}} className={s.img} />
              <div className={s.card_descr}>
                <h2 className='h2'>{product_state.title}</h2>
                  <PriceRow price={el.price} discont_price={el.discont_price} />
                  <Button onClick={ () => dispatch(addProductToTotalCart(...product_state))} name='Add to cart' className='primary' />
                  <Button onClick={addToWishBtn} name='Add to wishlist' className='primary' />
                  <div className='mt-10'>
                      <h4 className='h4'><b>Description:</b></h4>
                      <p className='text-xl'>{el.description}</p>                             
                  </div>
              </div>
            </>
          )}
        </div>
    </Container>
  )
}


