import { createSlice } from "@reduxjs/toolkit";

const wishlist_slice = createSlice({
    name: 'wishlist',
    initialState: {
        list: [],
    },
    reducers: {
        addProductToWishlist: (state, action) => {
            const productInWish= state.list.find(el => el.id === +action.payload.id);
            if (!productInWish) {
                state.list.push({ ...action.payload});
            }
        },
    },
})

export default wishlist_slice.reducer;
export const { addProductToWishlist } = wishlist_slice.actions;