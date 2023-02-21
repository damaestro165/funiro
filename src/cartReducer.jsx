export const intialState = {
  products: [],
  liked: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        products: payload.products,
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        products: payload.products,
      };
    case 'ADD_TO_LIKED':
      return {
        ...state,
        liked: payload.liked,
      };
    case 'REMOVE_FROM_LIKED':
      return {
        ...state,
        liked: payload.liked,
      };
    default:
      throw new error('no case for type ');
  }
};

export default cartReducer;
