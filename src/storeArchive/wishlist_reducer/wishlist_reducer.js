const ADD_PRODUCT_TO_WISHLIST = 'ADD_PRODUCT_TO_WISHLIST'

export const addProductToWishlistAction = payload => ({type: ADD_PRODUCT_TO_WISHLIST, payload})


export const wishlist_reducer = (state = [], action) => {
    if(action.type === ADD_PRODUCT_TO_WISHLIST) {
        const productInWishlist = state?.find(el => el.id === +action.payload.id);
        if(!productInWishlist){
            return [...state, action.payload]
        } else {
            return state
        }
    }
    return state
}