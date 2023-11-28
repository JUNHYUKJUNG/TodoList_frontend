import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "./appThunk";
import { createTodo } from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
      // 진행중
    });
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
      // 성공
    });
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
      // 실패
    });
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default appSlice;
