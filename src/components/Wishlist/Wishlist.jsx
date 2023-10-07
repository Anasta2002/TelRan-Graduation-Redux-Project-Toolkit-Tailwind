import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Banner from '../UI/Banner/Banner';
import EmptyWishlist from '../../assets/images_svg/EmptyWishlist';
import s from './Wishlist.module.css';


export default function Wishlist() {
    const wishProducts = useSelector(state => state.wishlist)

    return (
        <Banner>
            <div className={s.inner_container}>
                <h2 className='h2'>Wishlist</h2>
                <div className={s.wish_container}>
                    {
                        !wishProducts?.length ? 
                            <div className={s.empty_wish}>
                                <EmptyWishlist />
                                <p className={['h4'].join(' ')}>When you see something you like, click on the heart and we will save it here</p>
                            </div> :
                            <div className='cards_container'>
                                {wishProducts.map(el => <ProductCard key={el.id} {...el} />)}
                            </div>                      
                    }
                </div>
            </div>      
        </Banner>
    )
}
