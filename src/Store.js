import { configureStore } from '@reduxjs/toolkit'
import ProductSlices from './Slices/ProductSlices'

export const store = configureStore({
  reducer: {
    allProduct: ProductSlices
  },
})
