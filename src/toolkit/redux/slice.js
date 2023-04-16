import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      name: "Task 1",
      isCompleted: true,
    },
    {
      id: 2,
      name: "Task 2",
      isCompleted: false,
    },
  ],
  task: "",
};

export const demoRedux = createSlice({
  name: "demoredux",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    editTask: (state, action) => {
      state.task = state.tasks.find((item) => item.id === action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
      state.task = "";
    },
  },
});

export const demoReduxReducer = demoRedux.reducer;

export const demoReduxAction = demoRedux.actions;
