import React from 'react'
import AllCategories from '../components/AllCategories/AllCategories'
import Container from '../components/ReusableElements/Container/Container';


export default function Categories() {
  return (
    <Container>
      <h1 className='h2'>Categories</h1>
      <AllCategories/>
    </Container>
  )
}
