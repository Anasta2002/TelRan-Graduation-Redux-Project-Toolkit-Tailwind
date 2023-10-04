import { createSlice } from "@reduxjs/toolkit";

const wishlist_slice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addProductToWishlist: (state, action) => {
            const productInWishlist = state?.find(
              (el) => el.id === +action.payload.id
            );
            if (!productInWishlist) {
              state.push(action.payload);
            }
          },
    },
})

export default wishlist_slice.reducer;
export const { addProductToWishlist } = wishlist_slice.actions;