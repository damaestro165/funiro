export const intialState = {
  products: [],
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART':
      console.log('ADD_TO_CART', payload);

      return {
        ...state,
        products: payload.products,
      };
    case 'REMOVE_FROM_CART':
      console.log('REMOVE_TO_CART', payload);
      return {
        ...state,
        products: payload.products,
      };
    default:
      throw new error('no case for type ');
  }
};

export default cartReducer;
