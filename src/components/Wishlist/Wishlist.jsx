import React, { useContext } from 'react'
import Banner from '../UI/Banner/Banner'
import EmptyWishlist from '../../assets/images_svg/EmptyWishlist'
import s from './Wishlist.module.css'
import { Context } from '../../context'
import ProductCard from '../ProductCard/ProductCard'
import Container from '../UI/Container/Container'

export default function Wishlist() {
    const { wishlist_products } = useContext(Context)

    return (
        <>
          {
            !wishlist_products?.length ? 
                <Banner>
                    <div className={s.inner_container}>
                        <h2 className='h2'>Wishlist</h2>
                        <div className={s.wish_container}>
                            <div className={s.empty_wish}>
                                <EmptyWishlist />
                                <p className={['h4'].join(' ')}>When you see something you like, click on the heart and we will save it here</p>
                            </div>
                        </div>
                    </div>      
                </Banner> :
                <Container>
                    <h2 className='h2'>Wishlist</h2>
                    <div className='cards_container'>
                        {wishlist_products.map(el => <ProductCard key={el.id} {...el} />)}
                    </div>    
                </Container> 
          }
        </>
    )
}
