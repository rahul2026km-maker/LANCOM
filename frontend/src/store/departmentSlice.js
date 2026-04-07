import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  departments: [],
  isLoading: false,
  error: null,
};

const departmentSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    setDepartments: (state, action) => {
      state.departments = action.payload;
    },
    addDepartment: (state, action) => {
      state.departments.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setDepartments, addDepartment, setLoading } = departmentSlice.actions;
export default departmentSlice.reducer;