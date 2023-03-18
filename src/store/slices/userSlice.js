import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: sessionStorage.getItem('User') || null,
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      return (state.user = null);
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
