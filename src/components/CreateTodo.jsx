import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/appThunk";

const CreateTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();
    // 값이 없을 때 새로고침을 막는다.

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));
  };

  return (
    <form onSubmit={onSubmitCreateTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <input type="submit" value="생성" />
    </form>
  );
};
// 값을 onsubmitcreateTodo로 보내고, 그 값이 없으면 return을 하고, 값이 있으면 dispatch로 createTodo를 실행한다.

export default CreateTodo;
