import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
}

export const ProductSlices = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productReducer: (state, action) => {
      state.value = action.payload
    },
    categoryReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { productReducer, categoryReducer } = ProductSlices.actions;
export default ProductSlices.reducer;