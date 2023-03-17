import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, addToCart, removeFromCart } from './slices/cartSlice';
import {
  favouriteReducer,
  addToFavourite,
  removeFromFavourite,
} from './slices/favoriteSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
  },
});

export {
  store,
  addToCart,
  addToFavourite,
  removeFromCart,
  removeFromFavourite,
};
