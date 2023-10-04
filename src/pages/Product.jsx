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

  const product = useSelector(state => state.product?.list)
  const product_state = product?.map(el => el[0])

  return (
    <div>
        <ProductDescription product={product_state}/>
    </div>
  )
}
