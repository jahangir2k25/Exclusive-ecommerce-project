import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
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
    cartReducer: (state, action) => {
      state.cart = [...state.cart, action.payload]
      localStorage.setItem('cart', JSON.stringify([...state.cart]))
    },
    deleteReducer: (state, action) => {
      
    },
    
  },
})

export const { productReducer, categoryReducer, cartReducer, deleteReducer } = ProductSlices.actions;
export default ProductSlices.reducer;