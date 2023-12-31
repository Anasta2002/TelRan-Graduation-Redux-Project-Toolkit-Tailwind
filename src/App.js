import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Sales from './pages/Sales';
import ProductByCategory from './pages/ProductByCategory';
import Footer from './components/Footer/Footer';
import CartPage from './pages/CartPage';
import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishlistPage from './pages/WishlistPage';
import { Context } from './context';
import { fetchCategories } from './store/slices/category_slice';
import { fetchProducts } from './store/slices/products_slice';
import { useMediaQuery } from 'react-responsive';
import Breadcrumbs from './components/UI/Breadcrumbs/Breadcrumbs';
import ThankYou from './pages/ThankYou';
import ScrollToTheTop from './components/ScrollToTheTop/ScrollToTheTop';
import BackButton from './components/BackButton./BackButton';

function App() {
  //function for theme switching
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
          setIsDarkMode(true);
      } else {
          setIsDarkMode(false);
      }
  }, []);

  useEffect(() => {
      if (isDarkMode) {
          document.body.classList.add('dark');
          localStorage.setItem('theme', 'dark');
      } else {
          document.body.classList.remove('dark');
          localStorage.setItem('theme', 'light');
      }
  }, [isDarkMode]);

  const toggleTheme = () => {
      setIsDarkMode(!isDarkMode);
  };

  //detection if user use mobile phone
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });


  // work with states
  const dispatch = useDispatch()

  // categories state
  useEffect(() => {
    dispatch(fetchCategories())
    dispatch(fetchProducts())
  }, [])

  //cart state
  const cart_products = useSelector(state => state.cart_products?.list)

  //wishlist state
  const wishlist_products = useSelector(state => state.wishlist?.list)

  //products state
  const products_state = useSelector(state => state.products?.list);

  //ref for footer
  const footerRef = useRef(null);

  //work with location
  const location = useLocation();
  const wishlist = location.pathname === '/wishlist'
  const cart = location.pathname === '/cart'

  useEffect(() => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart_products))
    localStorage.setItem('wishlist_products', JSON.stringify(wishlist_products))
  }, [cart_products, wishlist_products])

  //for mobile nav
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Context.Provider value={{ isDarkMode, toggleTheme, products_state, wishlist_products, isMobile, cart_products }}>
      <div className='relative'>
        <Navbar 
          cart_number={cart_products?.length} 
          wish_number={wishlist_products?.length}
          isMenuOpen={isMenuOpen}
          openMenu={openMenu}
        />
        <BackButton />
        <Breadcrumbs />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/categories'} element={<Categories />} />
          <Route path={'/categories/:id'} element={<ProductByCategory products_state={products_state} />} />
          <Route path={'/products'} element={<Products products={products_state} />} />
          <Route path={'/cart'} element={<CartPage />} />
          <Route path={'/products/:id'} element={<Product />} />
          <Route path={'/sales'} element={<Sales products={products_state} />} />
          <Route path={'/wishlist'} element={<WishlistPage wishlist_products={wishlist_products} />} />
          <Route path={'/thankyou'} element={<ThankYou />} />
          <Route path={'*'} element={<NotFound/>} />
        </Routes>
        { !wishlist && !cart && <ScrollToTheTop footerRef={footerRef} /> }
        <Footer />
      </div>
      </Context.Provider>
  );
}

export default App;
