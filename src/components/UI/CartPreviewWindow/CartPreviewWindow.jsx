import React from 'react'
import s from './CartPreviewWindow.module.css'
import CloseButton from '../CloseButton/CloseButton'

export default function CartPreviewWindow({ showWindow, closeCartPreview, id, title, image, discont_price, description, price}) {
  const closeCartPreviewLocal = () => {
    closeCartPreview();
  };

  return (
    <div className={`fixed top-0 right-0 transform transition-transform duration-300 ${showWindow ? 'translate-x-0' : 'translate-x-full'}`}>
      {showWindow && (
        <div className="bg-green w-80 h-[500px] rounded-lg shadow-lg p-4">
          <span onClick={closeCartPreviewLocal}>
            <CloseButton />
          </span>
          <div>
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <p>Price: {price}</p>
            <p>Discounted Price: {discont_price}</p>
          </div>
        </div>
      )}
    </div>
  )
}
