import { loadAllProductsAction } from './all_products_reducer/all_products_reducer'
import { loadCategoriesAction } from './categories_reducer/categories_reducer'
import { getProductAction } from './product_reducer/product_reducer'
import { loadProductsByCategoryAction } from './products_by_category_reducer/products_by_category_reducer'
import { root_url } from '../global'

// categories
export const getCategories = callback => {
    fetch(`${root_url}categories/all`)
    .then(res => res.json())
    .then(res => callback(loadCategoriesAction(res)))
}

// products by category
export const getProductsByCategory = id => {
    return dispatch => {
        fetch(`${root_url}categories/${id}`)
            .then(res=>res.json())
            .then(json=>dispatch(loadProductsByCategoryAction(json)))        
    }
}

// product
export const getProduct = id => {
    return dispatch => {
        fetch(`${root_url}products/${id}`)
            .then(res=>res.json())
            .then(json=>dispatch(getProductAction(json)))       
    }
}

export const getAllProducts = callback => {
    fetch(`${root_url}products/all`)
    .then(res=>res.json())
    .then(json=>callback(loadAllProductsAction(json)))
}

