import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Container from '../ReusableElements/Container/Container'
import { Context } from '../../context'

export default function SaleBlock() {
  const products_state = useContext(Context).products_state

  const getRandomArray = () => {
    const random = [...products_state].filter(el => el.discont_price !== null).sort(() => Math.random() - 0.5)
    return random.slice(0, 4)
  } 

  const random_products = getRandomArray()

  return (
    <Container>
        <div className='cards_container'>
            {random_products
                ?.map(el => <ProductCard key={el.id} {...el} />)
            }
        </div> 
    </Container>
  )
}
