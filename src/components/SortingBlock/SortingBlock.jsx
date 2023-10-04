import React from 'react'
import s from './SortingBlock.module.css'
import SortForm from './SortForm/SortForm'
import FilterForm from './FilterForm/FilterForm'
import CheapProduct from './CheapProduct/CheapProduct'

export default function SortingBlock() {
  return (
    <div className={s.sorting_wrapper}>
        <FilterForm />
        <CheapProduct />
        <SortForm />
    </div>
  )
}
