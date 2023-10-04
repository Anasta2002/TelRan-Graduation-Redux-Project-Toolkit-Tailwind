import React from 'react'
import { Link } from 'react-router-dom'
import s from './CategoryCard.module.css'
import { root_url } from '../../../global.js'

export default function CategoryCard({title, image, id }) {
  const bg = `url(${root_url}${image})`;

  return (
    <Link to={`/categories/${id}`}>
        <div key={id} className={s.category_card} style={{backgroundImage: `${bg}`, backgroundSize: 'cover'}} />
        <h4 className={s.card_title}>{title}</h4>
    </Link>
  )
}
