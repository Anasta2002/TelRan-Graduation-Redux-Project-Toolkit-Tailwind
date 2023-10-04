import React from 'react'
import s from '../SortingBlock.module.css'
import { useDispatch } from 'react-redux';
import { sortProductsAction } from '../../../store/slices/products_slice';
import { sortProductCategory } from '../../../store/slices/productByCategory_slice';

export default function SortForm({state}) {
  const dispatch = useDispatch()

  const order = e => {
    dispatch(sortProductsAction(e.target.value))
    dispatch(sortProductCategory(e.target.value))
  } 

  return (
    <div className={s.sorting_section}>
        <p className={s.sorting_title}>Sorted</p>
        <select onInput={order} className={s.selector} defaultValue='default'>
            <option  value='default'>By default</option>
            <option value='title'>By alphabet</option>
            <option value='price_low'>By price (lowest first)</option>
            <option value='price_high'>By price (highest firts)</option>
        </select>
    </div>
  )
}
