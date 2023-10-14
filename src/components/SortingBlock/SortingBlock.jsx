import React, { useState } from 'react'
import s from './SortingBlock.module.css'
import SortForm from './SortForm/SortForm'
import FilterForm from './FilterForm/FilterForm'
import CheapProduct from './CheapProduct/CheapProduct'
import { useLocation } from 'react-router-dom'
import Filter from '../../assets/icons/Filter'
import CloseButton from '../UI/CloseButton/CloseButton'
import { useDispatch } from 'react-redux';
import { clearAllFilters } from '../../store/slices/products_slice'
import Delete from '../../assets/icons/Delete';


export default function SortingBlock() {
  const [isFilter, setIsFilter] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    setIsFilter(prevIsFilter => !prevIsFilter)
  }

  const location = useLocation();
  const sales_page = location.pathname === '/sales'
  const clearFunction = () => {
    dispatch(clearAllFilters())
    handleClick()
  }

  return (
    <div className={s.wrapper}>
      <div onClick={handleClick} className={s.icon_wrapper}>
        <Filter />
      </div>
      { isFilter &&
          <div className={s.sorting_wrapper}>
            <CloseButton onClick={handleClick} />
            <FilterForm />
            { !sales_page && <CheapProduct /> }
            <SortForm />
            <span onClick={clearFunction} className={s.clear_filters}>Clear all filters <Delete /></span>
          </div>          
      }
    </div>
  )
}
