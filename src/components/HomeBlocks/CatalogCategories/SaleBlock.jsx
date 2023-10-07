import React, { useContext } from 'react'
import ProductCard from '../../ProductCard/ProductCard'
import Container from '../../UI/Container/Container'
import { Context } from '../../../context'
import s from './index.module.css'


export default function SaleBlock() {
  const products_state = useContext(Context).products_state

  const getRandomArray = () => {
    const random = [...products_state].filter(el => el.discont_price !== null).sort(() => Math.random() - 0.5)
    return random.slice(0, 4)
  } 

  const random_products = getRandomArray()

  return (
    <Container>
      <div>
        <h2 className='h2'>Sales</h2>
        <div className='cards_container'>
            {random_products
                ?.map(el => <ProductCard key={el.id} {...el} />)
            }
        </div> 
        </div>
    </Container>
  )
}