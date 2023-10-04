import React from 'react'
import SortingBlock from '../components/SortingBlock/SortingBlock';
import ProductCard from '../components/ProductCard/ProductCard';
import Container from '../components/ReusableElements/Container/Container';


export default function Products({products}) {
  
  return (
    <Container>
      <h1 className='h2'>All products</h1>
      <SortingBlock />
      <div className='cards_container'>
        {products?.filter(el => el.show_product)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div> 
    </Container>
  )
}
