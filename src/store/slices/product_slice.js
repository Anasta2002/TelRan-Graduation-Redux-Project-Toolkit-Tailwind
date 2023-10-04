import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { root_url } from '../../global'

const initialState = {
    list: [],
}

export const fetchProduct = createAsyncThunk(
    'Product/fetchProduct',
    async (id) => {
        const response = await fetch(`${root_url}products/${id}`);
        const product = await response.json();
        return product;
    }
)

const product_slice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {    //pending
                state.status = 'loading'
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {   //success
                state.status = 'ready'
                state.list = [action.payload];
            })
            .addCase(fetchProduct.rejected, (state) => {   //rejected
                state.status = 'error'
            })
    }
})

export default product_slice.reducer;
export const selectProductStatus = (state) => state.product.status;