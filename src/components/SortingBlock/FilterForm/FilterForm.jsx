import React from 'react'
import s from '../SortingBlock.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsAction, selectProductsStatus } from '../../../store/slices/products_slice';
import { filterProductCategory } from '../../../store/slices/productByCategory_slice';

export default function FilterForm() {
  const dispatch = useDispatch()
  const status = useSelector(selectProductsStatus);

  const filter = e => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = min.value || 0;
    const max_value = max.value || Infinity;
  
    if (status === 'ready') {
      dispatch(filterProductsAction({ min_value, max_value }));
      dispatch(filterProductCategory({min_value, max_value}))
    } else {
      console.log('Products are still loading. Please wait.');
    }
  }

  return (
    <div className={s.sorting_section}>
        <p className={s.sorting_title}>Price</p>
        <form className={s.sorting_section} onSubmit={filter}>
            <input type='number' placeholder='min' name='min' className={s.price_input} />
            <input type='number' placeholder='max' name='max' className={s.price_input} />
            <button style={{display: 'none'}}>Filter</button>
        </form>                
    </div>
  )
}
