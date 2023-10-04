import React from 'react'
import s from './ProductDescription.module.css'
import { useDispatch } from 'react-redux';
import Button from '../ReusableElements/Button/Button';
import { root_url } from '../../global'
import { addProductToTotalCart } from '../../store/slices/cart_slice';
import Container from '../ReusableElements/Container/Container';


export default function ProductDescription(product_state) {
  const dispatch = useDispatch()
//  const state = product_state.product[0]
//  const { title, image, price, discont_price, description } = state;
 
  return (
    <Container>
        {/* <h2 className='h2'>{title?.title}</h2>
        <div className={s.container_card}>
            <div style={{backgroundImage: `url(${root_url}${image})`, backgroundSize: 'cover'}} className={s.img} />
            <div className={s.card_descr}>
                <div className='flex justify-between items-center'>
                    <div className={'h2'}>${price}</div>
                    <div>{discont_price && discont_price}</div>
                    <div>-{Math.floor(price - (price * discont_price / 100))}%</div>
                </div>
                <Button onClick={() => dispatch(addProductToTotalCart({...product_state}))} name='Add to cart' className='primary' />
                <div className='mt-10'>
                    <h4 className='h4'><b>Description: </b></h4>
                    <p className='text-xl'>{description}</p>                             
                </div>
            </div>
        </div> */}
    </Container>
  )
}


