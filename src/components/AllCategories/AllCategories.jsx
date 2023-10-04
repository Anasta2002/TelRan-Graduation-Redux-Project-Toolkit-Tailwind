import React from 'react'
import { useSelector } from 'react-redux'
import CategoryCard from './CategoryCard/CategoryCard'


export default function AllCategories() {

  const categories = useSelector(state => state.categories?.list)

  return (
    <div className='cards_container'>
      {categories.map(el => <CategoryCard key={el.id} {...el} />)}
    </div>
  )
}
