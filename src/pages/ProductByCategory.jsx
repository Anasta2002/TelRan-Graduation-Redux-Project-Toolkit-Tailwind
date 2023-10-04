import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard/ProductCard'
import SortingBlock from '../components/SortingBlock/SortingBlock';
import { fetchProductByCategory } from '../store/slices/productByCategory_slice'
import Container from '../components/ReusableElements/Container/Container';


export default function ProductByCategory() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductByCategory(id))
  }, [])

  const products = useSelector(state => state.product_category.list)
  const title = useSelector(state => state.product_category.category)

  return (
    <Container>
      <h2 className='h2'>{title?.title }</h2>
      <SortingBlock />
      <div className='cards_container'>
        {
          products
          // ?.map(el => ({...el, show_product: true}))
          .filter(el => el.show_product)
          .map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>      
    </Container>

  )
}
