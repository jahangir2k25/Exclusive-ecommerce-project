import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
  cart: localStorage.getItem('cart, heart') ? JSON.parse(localStorage.getItem('cart, heart')) : []
  // heart: localStorage.getItem('heart') ? JSON.parse(localStorage.getItem('heart')) : []
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

      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id)
      // console.log(findIndex);

      if (findIndex == -1) {
        state.cart = [...state.cart, action.payload]
        localStorage.setItem('cart', JSON.stringify([...state.cart]))
      } else {
        // console.log('item already added');
        // alert('item already added')
      }

    },
    deleteReducer: (state, action) => {
      // state.cart.splice(action.payload.id, 1)
      state.cart.splice((item) => item.id !== action.payload, 1)
      localStorage.setItem('cart', JSON.stringify([...state.cart]))
    },

    heartReducer: (state, action) => {
      state.heart = [...state.heart, action.payload]
      localStorage.setItem('heart', JSON.stringify([...state.heart]))
    },

    quantityReducer: (state, action) => {
      console.log(action.payload);
      
    },
  },
})

export const { productReducer, categoryReducer, cartReducer, deleteReducer, heartReducer, quantityReducer } = ProductSlices.actions;
export default ProductSlices.reducer;