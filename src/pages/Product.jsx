import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ProductDescription from '../components/ProductDescription/ProductDescription';
import { fetchProduct } from '../store/slices/product_slice';


export default function Product() {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct(id))
  }, [])

  const product_state = useSelector(state => state.product.list)

  console.log('product_page', product_state)
  console.log(id)

  return (
    <div>
        <ProductDescription product_state={product_state}/>
    </div>
  )
}
