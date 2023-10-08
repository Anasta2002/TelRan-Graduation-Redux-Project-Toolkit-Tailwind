import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { root_url } from "../../global";

export const fetchProduct = createAsyncThunk(
    'products/fetchProducts',
    async (id) => {
        const url = `${root_url}products/${id}`;
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
)

const product_slice = createSlice({
    name: 'Product',
    initialState: {
        list: [],
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {    //pending
                state.status = 'loading'
            })
            .addCase(fetchProduct.fulfilled, (state, action) => {   //success
                state.status = 'ready'
                state.list = action.payload
                return state
            })
            .addCase(fetchProduct.rejected, (state) => {   //rejected
                state.status = 'error'
            })
    }
})

export default product_slice.reducer;
export const selectProductStatus = (state) => state.product.status;