import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTodos = createAsyncThunk("appSlice/getTodos", async () => {
  const response = await axios.get("http://localhost:3010/todos");
  // 객체 없이 바로 getTodos
  // axios를 통해 http://localhost:3010/todos로 get 요청을 보내고, 응답을 받아서 response에 저장
  // 배포를 할 때는 http://localhost:3010/todos가 아니라, 실제 서버 주소를 적어줘야 함. .env 파일에 적어놓고, process.env.REACT_APP_API_URL로 불러옴

  return response.data.todos;
});

export const createTodo = createAsyncThunk(
  "appSlice/createTodo",
  async ({ title }) => {
    const response = await axios.post(
      "http://localhost:3010/todos",
      { title },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.todo;
  }
);

// 비동기 요청에서 쓰는 것이 createAsyncThunk

export const toggleDone = createAsyncThunk(
  "appSlice/toggleDone",
  async ({ todoId }) => {
    const response = await axios.put(
      `http://localhost:3010/todos/${todoId}/done`
    );

    return response.data.todo;
  }
);

// todos.js에서 todoId를 받아옴
