import { createSlice } from "@reduxjs/toolkit";

const wishlist_slice = createSlice({
    name: 'wishlist',
    initialState: {
        list: [],
    },
    reducers: {
        addProductToWishlist: (state, action) => {
            const productInWishlist = state.list?.find(
                (el) => el.id === +action.payload.id
            );
            if (!productInWishlist) {
                return [...state.list, action.payload];
            }
            return state;
        },
    },
})

export default wishlist_slice.reducer;
export const { addProductToWishlist } = wishlist_slice.actions;