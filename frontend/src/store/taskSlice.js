import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksAssignedToMe: [],
  tasksICreated: [],
  tasksByDate: {},
  isLoading: false,
  error: null,
  toggleView: 1,
  selectedDate: new Date().toISOString().split('T')[0],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasksAssignedToMe: (state, action) => {
      state.tasksAssignedToMe = action.payload;
    },
    setTasksICreated: (state, action) => {
      state.tasksICreated = action.payload;
    },
    setTasksByDate: (state, action) => {
      state.tasksByDate = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setToggleView: (state, action) => {
      state.toggleView = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    addTask: (state, action) => {
      state.tasksICreated.unshift(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const updatedTask = action.payload;
      const indexAssigned = state.tasksAssignedToMe.findIndex(t => t._id === updatedTask._id);
      if (indexAssigned !== -1) {
        state.tasksAssignedToMe[indexAssigned] = updatedTask;
      }
      const indexCreated = state.tasksICreated.findIndex(t => t._id === updatedTask._id);
      if (indexCreated !== -1) {
        state.tasksICreated[indexCreated] = updatedTask;
      }
    },
  },
});

export const {
  setTasksAssignedToMe,
  setTasksICreated,
  setTasksByDate,
  setLoading,
  setToggleView,
  setSelectedDate,
  addTask,
  updateTaskStatus,
} = taskSlice.actions;

export default taskSlice.reducer;