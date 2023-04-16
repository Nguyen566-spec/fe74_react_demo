import { createAction } from "@reduxjs/toolkit";
import { ADD_TASK, DELETE_TASK, EDIT_TASK, UPDATE_TASK } from "./type";

export const addTask = createAction(ADD_TASK);

export const deleteTask = createAction(DELETE_TASK);

export const editTask = createAction(EDIT_TASK);

export const updateTask = createAction(UPDATE_TASK);