// const ADD_PRODUCTS_TO_TOTAL_CART = 'ADD_PRODUCTS_TO_TOTAL_CART'
// const INCREMENT_CART = 'INCREMENT_CART'
// const DECREMENT_CART = 'DECREMENT_CART'
// const CLEAR_CART = 'CLEAR_CART'
// const DELETE_PRODUCT = 'DELETE_PRODUCT'

// export const addProductToTotalCartAction = payload => ({type: ADD_PRODUCTS_TO_TOTAL_CART, payload})
// export const increment_cart = payload => ({type: INCREMENT_CART, payload})
// export const decrement_cart = payload => ({type: DECREMENT_CART, payload})
// export const crearCartAction = () => ({type: CLEAR_CART})
// export const deleteProductFromCart = payload => ({type: DELETE_PRODUCT, payload})

// const checkProduct = (state, payload) => {
//     const productInCart = state.find(el => el.id === +payload.id);
//     if(!productInCart){
//         return [...state, {...payload, count: 1}]
//     } else {
//         productInCart.count++
//         return [...state]
//     }
// }

// export const cart_reducer = (state = [], action) => {
    
//     if (action.type === ADD_PRODUCTS_TO_TOTAL_CART) {
//         return checkProduct(state, action.payload)
//     } else 
//     if (action.type === DELETE_PRODUCT) {
//         return state.filter(el => el.id !== action.payload)
//     } else 
//     if (action.type === INCREMENT_CART) {
//         const element = state.find(el => el.id === action.payload)
//         element.count++
//         return [...state]
//     } else 
//     if (action.type === DECREMENT_CART) {
//         const element = state.find(el => el.id === action.payload)
//         if (element.count > 1) {
//             element.count--
//             return [...state]
//         } else {
//             return state.filter(el => el.id !== action.payload)
//         } 
//     } else if (action.type === CLEAR_CART) {
//         return []
//     } 
//     else return state
// }