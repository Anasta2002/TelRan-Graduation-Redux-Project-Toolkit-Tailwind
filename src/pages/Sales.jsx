import React from 'react'
import SortingBlock from '../components/SortingBlock/SortingBlock'
import ProductCard from '../components/ProductCard/ProductCard'
import Container from '../components/ReusableElements/Container/Container'

export default function Sales({products}) {

  return (
    <Container>
      <h1>Products with sale</h1>
      <SortingBlock products={products} />

      <div className='cards_container'>
            {products
                ?.filter(el => el.discont_price !== null)
                .map(el => <ProductCard key={el.id} {...el} />)
            }
        </div> 
    </Container>
  )
}
