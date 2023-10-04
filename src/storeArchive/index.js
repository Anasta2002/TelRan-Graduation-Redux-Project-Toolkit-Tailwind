import { combineReducers, createStore, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { products_by_category_reducer } from "./products_by_category_reducer/products_by_category_reducer"
import { categories_reducer } from "./categories_reducer/categories_reducer"
import { product_reducer } from "./product_reducer/product_reducer"
import { cart_reducer } from "./cart_reducer/cart_reducer"
import { all_products_reducer } from "./all_products_reducer/all_products_reducer"
import { wishlist_reducer } from "./wishlist_reducer/wishlist_reducer"

const rootReducer = combineReducers({
    categories: categories_reducer,
    products_by_category: products_by_category_reducer,
    product: product_reducer,
    all_products: all_products_reducer,
    cart: cart_reducer,
    wishlist: wishlist_reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))