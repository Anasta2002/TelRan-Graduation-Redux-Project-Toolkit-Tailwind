import React from 'react'
import s from './ProductDescription.module.css'
import { useDispatch } from 'react-redux';
import Button from '../UI/Button/Button';
import { root_url } from '../../global'
import { addProductToTotalCart } from '../../store/slices/cart_slice';
import Container from '../UI/Container/Container';


export default function ProductDescription({product_state}) {
  const dispatch = useDispatch()

  console.log('product_description', product_state)

  return (
    <Container>
      <h2 className='h2'>{product_state.title}</h2>
        <div className={s.container_card}>
          {product_state.map(el => 
            <>
              <div style={{backgroundImage: `url(${root_url}${el.image})`, backgroundSize: 'cover'}} className={s.img} />
              <div className={s.card_descr}>
                  <div className='flex justify-between items-center'>
                      <div>
                        {el.discont_price && 
                          <span>${el.discont_price}</span>
                        }
                      </div>
                      <div>${el.price}</div>
                      {/* <div>-Math.floor(((el.price - el.discont_price) / el.price) * 100)%</div> */}
                  </div>
                  <Button onClick={() => dispatch(addProductToTotalCart([...product_state]))} name='Add to cart' className='primary' />
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


