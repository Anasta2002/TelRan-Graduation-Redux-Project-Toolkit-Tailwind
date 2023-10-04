const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS'
const SORT_PRODUCTS = 'SORT_PRODUCTS'
const FILTER_PRODUCTS = 'FILTER_PRODUCTS'
const GET_CHEAP_PRODUCT = 'GET_CHEAP_PRODUCT'

export const loadAllProductsAction = payload => ({type: LOAD_ALL_PRODUCTS, payload}) 
export const sortProductsAction = payload => ({type: SORT_PRODUCTS, payload})
export const filterProductsAction = payload => ({type: FILTER_PRODUCTS, payload})
export const getCheapProductAction = payload => ({type: GET_CHEAP_PRODUCT, payload})

export const all_products_reducer = (state = [], action) => {
    if (action.type === LOAD_ALL_PRODUCTS) {
        return action.payload.map(el => ({...el, show_product: true}))
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'default') {
            state.sort((a, b) => a.id-b.id)
        } else if(action.payload === 'title') {
            state.sort((a, b) => a.title.localeCompare(b.title))
        } else if (action.payload === 'price_low') {
            state.sort((a, b) => a.price-b.price)
        } else if (action.payload === 'price_high') {
            state.sort((a, b) => b.price-a.price)
        } 
        return [...state]
    } else if(action.type === FILTER_PRODUCTS){
        const { min_value, max_value } = action.payload;
        return state.map( el => {
            if (el.price >= min_value && el.price <= max_value){
                el.show_product = true;
            } else {
                el.show_product = false;
            }
            return el
        }) 
    } else if (action.type === GET_CHEAP_PRODUCT) {
        if (action.payload) {
            return state.map(el => {
              if(!el.discont_price){
                el.show_product = false
              }
              return el
            })
          } else {
            return state.map( el => {
              el.show_product = true
              return el
            })
          }
    }
    else return state
}