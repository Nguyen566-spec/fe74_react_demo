import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, editTask, updateTask } from "./action";

const initialState = {
  taskList: [
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
  taskEdit: "",
};

export const demoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.taskList.push(action.payload);
    })
    .addCase(deleteTask, (state, action) => {
      state.taskList = state.taskList.filter((e) => e.id !== action.payload);
    })
    .addCase(editTask, (state, action) => {
      state.taskEdit = state.taskList.find((e) => e.id === action.payload);
    })
    .addCase(updateTask, (state, action) => {
      state.taskList = state.taskList.map((e) => {
        if (e.id === action.payload.id) {
          return action.payload;
        }
        return e;
      });
      state.taskEdit = ""
    });
});
