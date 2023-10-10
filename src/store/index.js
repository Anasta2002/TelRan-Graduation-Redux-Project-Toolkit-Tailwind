import { configureStore } from "@reduxjs/toolkit";
import products_slice from './slices/products_slice';
import category_slice from "./slices/category_slice";
import wishlist_slice from './slices/wishlist_slice';
import productByCategory_slice from "./slices/productByCategory_slice";
import product_slice from "./slices/product_slice";
import cart_slice from "./slices/cart_slice";

const store = configureStore({
    reducer: {
        products: products_slice,
        categories: category_slice,
        product: product_slice,
        wishlist: wishlist_slice,
        product_category: productByCategory_slice,
        cart_products: cart_slice,
    }
})

export default store;