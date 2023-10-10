import React from 'react'
import s from './SortingBlock.module.css'
import SortForm from './SortForm/SortForm'
import FilterForm from './FilterForm/FilterForm'
import CheapProduct from './CheapProduct/CheapProduct'
import { useLocation } from 'react-router-dom'

export default function SortingBlock() {
  const location = useLocation();
  const sales_page = location.pathname === '/sales'

  return (
    <div className={s.sorting_wrapper}>
        <FilterForm />
        { !sales_page && <CheapProduct /> }
        <SortForm />
    </div>
  )
}
