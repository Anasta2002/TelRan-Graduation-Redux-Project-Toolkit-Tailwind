import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
    'products/fetchProducts',
    async (id) => {
        const url = `http://localhost:3333/products/${id}`;
        const res = await fetch(url)
        const data = await res.json()
        console.log('from request', data)
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