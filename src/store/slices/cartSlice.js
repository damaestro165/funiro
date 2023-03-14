import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },
    removeFromCart(state, action) {
      const filteredCart = state.products.filter((product) => {
        return product.heading !== action.payload.heading;
      });
      state.products = filteredCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
