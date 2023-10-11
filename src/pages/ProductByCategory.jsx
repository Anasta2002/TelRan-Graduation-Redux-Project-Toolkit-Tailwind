import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import SortingBlock from '../components/SortingBlock/SortingBlock';
import Container from '../components/UI/Container/Container';


export default function ProductByCategory(products_state) {
  const { id } = useParams()

  const productInCategory = useSelector(state => state.categories.list)
  const category_title = productInCategory.find(el => el.id === +id)

  const products = products_state.products_state

  return (
    <Container>
      <h2 className='h2'>{category_title?.title }</h2>
      
      <SortingBlock />
      <div className='cards_container'>
        {
          products?.filter(el => el.categoryId === +id)
          ?.filter(el => el.show_product)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>      
    </Container>

  )
}
