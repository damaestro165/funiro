const { createSlice } = require('@reduxjs/toolkit');

const favouriteSlice = createSlice({
  name: 'favourite',
  initialState: {
    like: [],
  },
  reducers: {
    addToFavourite(state, action) {
      state.like.push(action.payload);
    },
    removeFromFavourite(state, action) {
      //
      const notInFavourite = state.like.filter(
        (product) => product.heading !== action.payload.heading
      );
      state.like = notInFavourite;
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export const favouriteReducer = favouriteSlice.reducer;
