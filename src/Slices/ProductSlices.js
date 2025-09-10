import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null,
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  wishlist: localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [],
  subTotal: 0,
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
      }
    },
    deleteReducer: (state, action) => {
      // state.cart.splice(action.payload.id, 1)
      state.cart.splice((item) => item.id !== action.payload, 1)
      localStorage.setItem('cart', JSON.stringify([...state.cart]))
    },

    wishlistReducer: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id)
      if (findIndex == -1) {
        state.wishlist = [...state.wishlist, action.payload]
        localStorage.setItem('wishlist', JSON.stringify([...state.wishlist]))
      } else { }
    },

    quantityReducer: (state, action) => {
      // console.log(action.payload);
      state.cart[action.payload.id].quantity = action.payload.actionname == 'Increment' ?
        state.cart[action.payload.id].quantity + 1 : state.cart[action.payload.id].quantity - 1

      localStorage.setItem('cart', JSON.stringify([...state.cart]))
    },
    subTotalReducer: (state, action) => {
      state.subTotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }

  },
})

export const { productReducer, categoryReducer, cartReducer, deleteReducer, wishlistReducer, quantityReducer, subTotalReducer } = ProductSlices.actions;
export default ProductSlices.reducer;