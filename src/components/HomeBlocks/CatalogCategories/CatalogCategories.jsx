import React from 'react'
import AllCategories from '../../AllCategories/AllCategories'
import s from './index.module.css'
import { Link } from 'react-router-dom'
import Container from '../../UI/Container/Container'
import Button from '../../UI/Button/Button'

export default function Catalog_categories() {
  return (
    <Container>
      <div className={s.catalog_blog_header}>
        <h2 className='h2'>Catalog</h2>
        <Link to={'/categories'}>
          <Button name='All categories' />
        </Link>
      </div> 
      <div className={s.one_line_container}>
        <AllCategories />
      </div>
    </Container>
  )
}
