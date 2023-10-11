import { Routes, Route } from 'react-router-dom';
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
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WishlistPage from './pages/WishlistPage';
import { Context } from './context';
import { fetchCategories } from './store/slices/category_slice';
import { fetchProducts } from './store/slices/products_slice';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { useMediaQuery } from 'react-responsive';

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

  return (
    <Context.Provider value={{ isDarkMode, toggleTheme, products_state, wishlist_products, isMobile }}>
      <Navbar 
        cart_number={cart_products?.length} 
        wish_number={wishlist_products?.length}
      />
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
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
      <Footer />
      </Context.Provider>
  );
}

export default App;
