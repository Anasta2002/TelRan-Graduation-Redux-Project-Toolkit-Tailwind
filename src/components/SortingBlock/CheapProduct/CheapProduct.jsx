import React, { useState} from 'react'
import s from '../SortingBlock.module.css'
import { useDispatch } from 'react-redux';
import { getCheapProductAction } from '../../../store/slices/products_slice';


export default function CheapProduct() {
  const [ itemChecked, setItemChecked ] = useState(false)

  const handleChange = () => setItemChecked(!itemChecked)

  const dispatch = useDispatch()

  const getCheapProducts = e => {
    dispatch(getCheapProductAction(e.target.checked))
  }

  return (
    <div className={s.sorting_section}>
        <div className={s.sorting_section}>
            <p className={s.sorting_title}>Discounted products</p>
            <input type='checkbox' checked={itemChecked} onChange={handleChange} onClick={getCheapProducts}/>
        </div>
    </div>
  )
}
