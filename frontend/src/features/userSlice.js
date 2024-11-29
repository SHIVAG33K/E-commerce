import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user : null,
  isAuthenticated : false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    user: (state, action) => {
        state.user = action.payload;
        isAuthenticated = true
      },
    logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
      },
  },
})

export const {user,logout} = userSlice.actions

export default userSlice.reducer