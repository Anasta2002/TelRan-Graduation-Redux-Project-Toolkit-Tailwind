import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import Banner from '../UI/Banner/Banner';
import EmptyWishlist from '../../assets/images_svg/EmptyWishlist';
import s from './Wishlist.module.css';
import { Context } from '../../context';
import { Link } from 'react-router-dom';
import ArrowBack from '../../assets/icons/ArrowBack';
import Delete from '../../assets/icons/Delete';

export default function Wishlist() {
    const { wishlist_products } = useContext(Context)
    console.log(wishlist_products)

    return (
        <Banner>
            <div className={s.inner_container}>
                {/* <Link to={'/products'} className={s.button_back}><ArrowBack /><span>Return to the products</span></Link> */}
                {/* <p className={s.clean_cart} onClick={() => dispatch(cleanCart())}><span>Empty the cart </span><Delete /></p> */}
                <h2 className='h2'>Wishlist</h2>
                <div className={s.wish_container}>
                    {
                        !wishlist_products?.length ? 
                            <div className={s.empty_wish}>
                                <EmptyWishlist />
                                <p className={['h4'].join(' ')}>When you see something you like, click on the heart and we will save it here</p>
                            </div> :
                            <div className='cards_container'>
                                {wishlist_products.map(el => <ProductCard key={el.id} {...el} />)}
                            </div>                      
                    }
                </div>
            </div>      
        </Banner>
    )
}
