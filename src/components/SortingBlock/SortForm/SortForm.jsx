import React from 'react';
import { useDispatch } from 'react-redux';
import { sortProductsAction } from '../../../store/slices/products_slice';
import s from '../SortingBlock.module.css'

export default function SortForm() {
  const dispatch = useDispatch();

  const options = [
    { value: 'default', label: 'By default' },
    { value: 'title', label: 'By alphabet' },
    { value: 'price_low', label: 'By price (lowest first)' },
    { value: 'price_high', label: 'By price (highest first)' },
  ];

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(sortProductsAction(selectedValue));
  };

  return (
    <div className={s.sorting_section}>
      <select defaultValue="default" onChange={handleSelectChange} className={s.select}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}