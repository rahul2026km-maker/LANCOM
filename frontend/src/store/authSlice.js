import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  department: JSON.parse(localStorage.getItem('department')) || null,
  token: localStorage.getItem('token') || null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.department = action.payload.department;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('department', JSON.stringify(action.payload.department));
    },
    logout: (state) => {
      state.department = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('department');
    },
  },
});

export const { setCredentials, logout, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;