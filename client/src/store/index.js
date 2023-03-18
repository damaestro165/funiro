import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, addToCart, removeFromCart } from './slices/cartSlice';
import {
  favouriteReducer,
  addToFavourite,
  removeFromFavourite,
} from './slices/favoriteSlice';
import { addUser, removeUser, userReducer } from './slices/userSlice';
const store = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {},
      serializableCheck: false,
    }),
});

export {
  store,
  addToCart,
  addToFavourite,
  removeFromCart,
  removeFromFavourite,
  addUser,
  removeUser,
};
