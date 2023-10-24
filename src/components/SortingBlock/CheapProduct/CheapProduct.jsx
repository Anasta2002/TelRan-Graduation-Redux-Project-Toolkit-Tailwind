import React, { useState } from 'react';
import s from '../SortingBlock.module.css';
import { useDispatch } from 'react-redux';
import { getCheapProductAction } from '../../../store/slices/products_slice';

export default function CheapProduct() {
  const [itemChecked, setItemChecked] = useState(false);
  const handleChange = () => setItemChecked(!itemChecked);
  const dispatch = useDispatch();

  const getCheapProducts = (e) => {
    dispatch(getCheapProductAction(e.target.checked));
  };

  return (
    <div className={s.sorting_section} onClick={getCheapProducts}>
      <label className={s.switch}>
        <input
          type="checkbox"
          className={s.switch_input}
          checked={itemChecked}
          onChange={handleChange}
        />
        <span className={s.switch_slider} />
      </label>
      <span className={s.sorting_title}>Discounted products</span>
    </div>
  );
}
