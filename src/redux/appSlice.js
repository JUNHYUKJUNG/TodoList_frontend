import { createSlice } from "@reduxjs/toolkit";
import {
  createTodo,
  deleteTodo,
  getTodos,
  toggleDone,
  updateTodo,
} from "./appThunk";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    todos: null,
    isLoading: false,
    newTodo: "",
    // CreateTodo.jsx에서 NewTodo를 옮김
  },
  // 어떤 객체인지 정의. 이름은 appSlice, 초기값은 지금 없으니 todos: null, isLoading: false
  reducers: {
    setNewTodo: (state, action) => {
      state.newTodo = action.payload;
    },
  },
  // CreateTodo.jsx에서 setNewTodo를 옮김
  extraReducers: (builder) => {
    builder.addCase(getTodos.pending, (state) => {
      state.isLoading = true;
    });
    // 진행중
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
      state.updateToggles = action.payload.map(() => {
        return false;
      });
      state.isLoading = false;
    });
    // 성공
    builder.addCase(getTodos.rejected, (state) => {
      state.isLoading = false;
    });
    // 실패
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.todos = [...state.todos, action.payload];
      // 기존의 todos에 새로운 todo를 추가한 새로운 배열을 todos에 할당
      state.isLoading = false;
    });
    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(toggleDone.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(toggleDone.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(toggleDone.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((v) => {
        if (v.id === action.payload.id) {
          return action.payload;
        } else {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(updateTodo.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      // action.payload = "Deleted todo."
      state.todos = state.todos.filter((v) => {
        if (v.id !== action.payload) {
          return v;
        }
      });
      state.isLoading = false;
    });
    builder.addCase(deleteTodo.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
// state는 상태값이고, action은 값을 변경하는 행동을 의미함. action.payload는 action의 속성값을 의미함.
