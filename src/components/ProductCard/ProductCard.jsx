import React, { useContext, useState } from 'react';
import s from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { root_url } from '../../global';
import Cart from '../../assets/icons/Cart';
import { useDispatch } from 'react-redux';
import Heart from '../../assets/icons/Heart';
import Button from '../UI/Button/Button';
import { addProductToTotalCart } from '../../store/slices/cart_slice';
import { addProductToWishlist, removeFromWishlist } from '../../store/slices/wishlist_slice';
import PriceRow from '../UI/PriceRow/PriceRow';
import { Context } from '../../context';
import HeartFilled from '../../assets/icons/HeartFilled';
import CartPreviewWindow from '../UI/CartPreviewWindow/CartPreviewWindow';
import FullCart from '../../assets/icons/FullCart';

export default function ProductCard({ id, title, price, image, discont_price, description }) {
  const dispatch = useDispatch();
  const backgroundImage = `url(${root_url}${image})`;

  const { wishlist_products, cart_products } = useContext(Context);
  const inWishlist = wishlist_products.find(el => el.id === id);
  const inCart = cart_products.find(el => el.id === id);

  const [showWindow, setShowWindow] = useState(false);

  const openCartPreview = () => {
    setShowWindow(true);
  };
  
  const closeCartPreview = () => {
    setShowWindow(false);
  };

  const addToCartBtn = (e) => {
    dispatch(addProductToTotalCart({ id, title, image, discont_price, description, price }));
    openCartPreview();
  };

  const addToWishlistBtn = (e) => {
    if (inWishlist) {
      dispatch(removeFromWishlist(id));
    } else {
      dispatch(addProductToWishlist({ id, title, image, discont_price, description, price }));
    }
  };

  return (
    <div className={s.card_container}>
      <Link className={s.card} to={`/products/${id}`}>
        <div style={{ backgroundImage: `${backgroundImage}`, backgroundSize: 'cover' }} className={s.products_card_img} />
        <PriceRow price={price} discont_price={discont_price} />
        <h4 className={s.card_title}>{title}</h4>
      </Link>
      <div className={s.buttons_container}>
        <Button className='primary' onClick={addToWishlistBtn} name={!inWishlist ? <Heart /> : <HeartFilled />} />
        <Button className='primary' onClick={addToCartBtn} name={!inCart ? <Cart/> : <FullCart />} />
      </div>
      {showWindow && (
        <CartPreviewWindow
          id={id}
          title={title}
          image={image}
          discont_price={discont_price}
          description={description}
          price={price}
          closeCartPreview={closeCartPreview}
        />
      )}
    </div>
  );
}
