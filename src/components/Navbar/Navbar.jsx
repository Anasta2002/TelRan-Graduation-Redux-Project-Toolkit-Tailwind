import React, { useContext } from 'react';
import s from './Navbar.module.css';
import { NavLink, Link } from 'react-router-dom';
import Cart from '../../assets/icons/Cart';
import logo from '../../assets/logo.png';
import MoodSwitcher from './MoodSwitcher/MoodSwitcher';
import Button from '../UI/Button/Button';
import Badge from '../UI/Badge/Badge';
import Heart from '../../assets/icons/Heart';
import { Context } from '../../context';
import Sales from '../../assets/icons/Sales';
import HomeIcon from '../../assets/icons/HomeIcon';
import Categories from '../../assets/icons/Categories';
import Products from '../../assets/icons/Products';

export default function Navbar({cart_number, wish_number}) {
    const {isDarkMode, toggleTheme, isMobile} = useContext(Context)

    return (
        <div className={s.nav}>
            <div className={s.left_part}>
                <Link to={'/'}>
                    { isMobile ? 
                        <HomeIcon /> : 
                        <img src={logo} alt='logo' />
                    }
                </Link>
                <Link to={'/categories'} className={s.categories_link}>
                    { isMobile ? 
                        <Categories /> : 
                        <Button className='primary' name='Catalog'/> 
                    }
                </Link>
                <NavLink to={'/products'}>
                    { isMobile ? 
                        <Products /> : 
                        <Button className='primary' name='All products'/>
                    }
                </NavLink>
            </div>
            <div className={s.right_part}>
                <NavLink to={'/sales'}>
                    <Sales />
                </NavLink>
                <MoodSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
                <NavLink to={'/wishlist'} className='relative'>
                    <Heart isDarkMode={isDarkMode} />
                    {wish_number > 0 && <Badge number={wish_number} />}
                </NavLink>
                <NavLink to={'/cart'} className='relative'>
                    <Cart isDarkMode={isDarkMode} />
                    {cart_number > 0 && <Badge number={cart_number} />}
                </NavLink>
            </div>
        </div>
    );
}


