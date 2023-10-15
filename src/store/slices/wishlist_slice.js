import { createSlice } from "@reduxjs/toolkit";

const wishlist_slice = createSlice({
    name: 'wishlist',
    initialState: {
        list: JSON.parse(localStorage.getItem('wishlist_products')) || [],
    },
    reducers: {
        addProductToWishlist: (state, action) => {
            const productInWish= state.list.find(el => el.id === +action.payload.id);
            if (!productInWish) {
                state.list.push({ ...action.payload});
            }
        },
        removeFromWishlist: (state, action) => {
            state.list = state.list.filter(el => el.id !== action.payload)
        }
    },
})

export default wishlist_slice.reducer;
export const { addProductToWishlist, removeFromWishlist } = wishlist_slice.actions;