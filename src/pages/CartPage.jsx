import React from 'react'
import Cart from '../components/CartBlocks/Cart';
import Banner from '../components/UI/Banner/Banner';

export default function CartPage({cart_products}) {
  console.log(cart_products)

  return (
    <Banner>
      <Cart cart_products={cart_products} />
    </Banner>
  )
}
