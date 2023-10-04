import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { root_url } from '../../global'

const initialState = {
    list: [],
}

export const fetchCategories = createAsyncThunk(
    'Categories/fetchCategories',
    async () => {
        const response = await fetch(`${root_url}categories/all`);
        const data = await response.json();
        return data;
    }
)

const categories_slice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = 'error'
            })
    }
})

export default categories_slice.reducer;