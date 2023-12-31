import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import ProductDescription from '../components/ProductDescription/ProductDescription';


export default function Product() {
  const { id } = useParams()
  const product_state = useSelector(state => state.products)
  const product = product_state.list[id-1]
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <ProductDescription product={product}/>
    </div>
  )
}