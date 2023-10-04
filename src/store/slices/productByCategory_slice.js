import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { root_url } from '../../global'
import produce from 'immer'

const initialState = {
    list: [],
}

export const fetchProductByCategory = createAsyncThunk(
    'ProductByCategory/fetchProductByCategory',
    async (id) => {
        const response = await fetch(`${root_url}categories/${id}`);
        const data = await response.json();
        return data;
    }
)

const productByCategory_slice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        sortProductCategory(state, action) {
            console.log('sort', state.list.data)
            if (action.payload === 'default') {
                state.list.data.sort((a, b) => a.id - b.id);
            } else if (action.payload === 'title') {
                state.list.data.sort((a, b) => a.title.localeCompare(b.title));
            } else if (action.payload === 'price_low') {
                state.list.data.sort((a, b) => a.price - b.price);
            } else if (action.payload === 'price_high') {
                state.list.data.sort((a, b) => b.price - a.price);
            }
        },
        filterProductCategory(state, action) {
            const { min_value, max_value } = action.payload;

            state.list.data = state.list.data.map((el) => ({
                ...el,
                show_product: el.price >= min_value && el.price <= max_value,
            }));

            // // Сортируем элементы так, чтобы элементы с show_product: true были впереди
            // state.list.data.sort((a, b) => {
            //     if (a.show_product && !b.show_product) {
            //         return -1;
            //     } else if (!a.show_product && b.show_product) {
            //         return 1;
            //     } else {
            //         // Если оба элемента имеют show_product: true или show_product: false, сохраняем текущий порядок
            //         return 0;
            //     }
            // });
            state.list.data = state.list.data.map((el) => {
                if (el.price >= min_value && el.price <= max_value) {
                    return { ...el, show_product: true };
                } else {
                    return { ...el, show_product: false };
                }
            });
        },
        getCheapProductCategory(state, action) {
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
            .addCase(fetchProductByCategory.pending, (state) => {    //pending
                state.status = 'loading'
            })
            .addCase(fetchProductByCategory.fulfilled, (state, action) => {   //success
                state.status = 'ready'
                state.list = action.payload
            })
            .addCase(fetchProductByCategory.rejected, (state) => {   //rejected
                state.status = 'error'
            })
    }
})

export default productByCategory_slice.reducer;
export const { sortProductCategory, filterProductCategory, getCheapProductCategory } = productByCategory_slice.actions;
export const selectProductsStatus = (state) => state.productByCategory_slice.status;