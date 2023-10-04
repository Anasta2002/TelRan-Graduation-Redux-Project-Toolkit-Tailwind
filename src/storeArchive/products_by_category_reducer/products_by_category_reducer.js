const LOAD_PRODUCTS = 'LOAD_PRODUCTS'
const SORT_PRODUCTS_CATEGORIES = 'SORT_PRODUCTS_CATEGORIES'
const FILTER_PRODUCTS_CATEGORIES = 'FILTER_PRODUCTS_CATEGORIES'
const GET_CHEAP_PRODUCT_CATEGORIES = 'GET_CHEAP_PRODUCT_CATEGORIES'

export const loadProductsByCategoryAction = payload => ({type: LOAD_PRODUCTS, payload}) 
export const sortProductsCategoryAction = payload => ({type: SORT_PRODUCTS_CATEGORIES, payload})
export const filterProductsCategoryAction = payload => ({type: FILTER_PRODUCTS_CATEGORIES, payload})
export const getCheapProductCategoryAction = payload => ({type: GET_CHEAP_PRODUCT_CATEGORIES, payload})

export const products_by_category_reducer = (state = {}, action) => {
    if (action.type === LOAD_PRODUCTS) {
        const { data, category } = action.payload;
        const data_show_product = data.map(el => ({...el, show_product: true}));
        return {...state, category, data: data_show_product}
    } else if (action.type === SORT_PRODUCTS_CATEGORIES) {
        const sortedData = [...state.data]
        if (action.payload === 'title') {
            sortedData.sort((a, b) => a.title.localeCompare(b.title))
        } else if (action.payload === 'price_low') {
            sortedData.sort((a, b) => a.price - b.price)
        } else if (action.payload === 'price_high') {
            sortedData.sort((a, b) => b.price - a.price)
        } else if (action.payload === 'default') {
            sortedData.sort((a, b) => a.id - b.id)
        }
        return {...state, data: sortedData}
    } else if (action.type === FILTER_PRODUCTS_CATEGORIES) {
            const { min_value, max_value } = action.payload;
            const filterData = [...state.data].map(el => {
                if (el.price >= min_value && el.price <= max_value) {
                    el.show_product = true;
                } else {
                    el.show_product = false;
                }
                return el
            });
            return { ...state, data: filterData }
        } else if (action.type === GET_CHEAP_PRODUCT_CATEGORIES) {
            const discontData = action.payload
            ? [...state.data].map(el => {
                if (!el.discont_price) {
                    el.show_product = false
                }
                return el
            })
            : state.data.map(el => {
                el.show_product = true
                return el
            });
        return { ...state, data: discontData }
    } else return state
}