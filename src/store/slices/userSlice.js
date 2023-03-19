import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: JSON.parse(localStorage.getItem('User')) || null,
  },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state, action) {
      state.user = null;
      localStorage.setItem('User', JSON.stringify(state.user));
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
