import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { root_url } from '../../global'

const initialState = {
    list: [],
}

export const fetchProducts = createAsyncThunk(
    'Products/fetchProducts',
    async () => {
        const response = await fetch(`${root_url}products/all`);
        const data = await response.json();
        const products = data.map(el => ({...el, show_product: true}))
        return products;
    }
)

const products_slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProductsAction(state, action) {
            if (action.payload === 'default') {
                state.list.sort((a, b) => a.id - b.id);
            } else if (action.payload === 'title') {
                state.list.sort((a, b) => a.title.localeCompare(b.title));
            } else if (action.payload === 'price_low') {
                state.list.sort((a, b) => a.price - b.price);
            } else if (action.payload === 'price_high') {
                state.list.sort((a, b) => b.price - a.price);
            }
        },
        filterProductsAction(state, action) {
            const { min_value, max_value } = action.payload;
            console.log('categ', state.list)
            state.list = state.list.map((el) => {
                if (el.price >= min_value && el.price <= max_value) {
                    return { ...el, show_product: true };
                } else {
                    return { ...el, show_product: false };
                }
            });
        },
        getCheapProductAction(state, action) {
            if (action.payload) {
                state.list = state.list.map(el => {
                    if (!el.discont_price) {
                        return { ...el, show_product: false };
                    }
                    return el;
                });
            } else {
                state.list = state.list.map(el => {
                    return { ...el, show_product: true };
                });
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {    //pending
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {   //success
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {   //rejected
                state.status = 'error'
            })
    }
})

export default products_slice.reducer;
export const { sortProductsAction, filterProductsAction, getCheapProductAction } = products_slice.actions;
export const selectProductsStatus = (state) => state.products.status;