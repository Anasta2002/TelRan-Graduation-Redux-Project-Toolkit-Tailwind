import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: JSON.parse(localStorage.getItem('shopping_cart')) || [],
}

const cart_slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToTotalCart: (state, action) => {
            const productInCart = state.list.find((el) => el.id === +action.payload.id);
            if (!productInCart) {
              state.list.push({ ...action.payload, count: 1 });
            } else {
              productInCart.count++;
            }
          },
          deleteProductFromCart: (state, action) => {
            state.list = state.list.filter((el) => el.id !== action.payload);
          },
          incrementCart: (state, action) => {
            const element = state.list.find((el) => el.id === action.payload);
            element.count++;
          },
          decrementCart: (state, action) => {
            const element = state.list.find((el) => el.id === action.payload);
            if (element.count > 1) {
              element.count--;
            } else {
              state.list = state.list.filter((el) => el.id !== action.payload);
            }
          },
          clearCart: (state) => {
            state.list = [];
          },
    }
})

export const {
    addProductToTotalCart,
    deleteProductFromCart,
    incrementCart,
    decrementCart,
    clearCart,
  } = cart_slice.actions;
  
  export default cart_slice.reducer;