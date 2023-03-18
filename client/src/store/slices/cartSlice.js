import { createSlice, nanoid } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      //items with image, title, text and price
    ],
  },
  reducers: {
    addToCart(state, action) {
      const productToAdd = { ...action.payload, id: nanoid() };
      const existingProduct = state.products.find(
        (product) => product.heading === productToAdd.heading
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const filteredCart = state.products.filter((product) => {
        return product.heading !== action.payload.heading;
      });
      state.products = filteredCart;
    },
    increaseInCart(state, action) {
      const product = state.products.find((product) => {
        return product.heading === action.payload.heading;
      });
      if (product && product.quantity <= 5) {
        product.quantity += 1;
        const price = product.price + product.price / (product.quantity - 1);
        product.price = Number(price.toFixed(2));
      }
    },
    decreaseInCart(state, action) {
      const product = state.products.find((product) => {
        return product.id === action.payload.id;
      });
      if (product) {
        if (product.quantity > 1) {
          const price = action.payload.price / action.payload.quantity;
          product.quantity -= 1;
          product.price -= Number(price.toFixed(2));
        } else {
          state.products;
        }
      }
    },
  },
});
export const { addToCart, removeFromCart, increaseInCart, decreaseInCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
