import { createContext, useReducer, useContext } from 'react';
import cartReducer, { intialState } from './cartReducer';

const cartContext = createContext(intialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, intialState);

  const addToCart = (product) => {
    const updatedCart = state.products.concat(product);

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = state.products.filter(
      (currentProduct) => currentProduct.heading != product.heading
    );
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedCart,
      },
    });
  };

  const addToLiked = (product) => {
    const updatedCart = state.liked.concat(product);

    dispatch({
      type: 'ADD_TO_LIKED',
      payload: {
        liked: updatedCart,
      },
    });
  };

  const removeFromLiked = (product) => {
    const updatedCart = state.liked.filter(
      (currentProduct) => currentProduct.heading != product.heading
    );
    dispatch({
      type: 'REMOVE_FROM_LIKED',
      payload: {
        liked: updatedCart,
      },
    });
  };

  const value = {
    liked: state.liked,
    products: state.products,
    addToCart,
    removeFromCart,
    addToLiked,
    removeFromLiked,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(cartContext);
  return context;
};
