import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();
    // 값이 없을 때 새로고침을 막는다.

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));

    dispatch(setNewTodo(""));
    // 값을 보내고, 값을 초기화한다.
  };

  return (
    <form className="flex" onSubmit={onSubmitCreateTodo}>
      <input
        className="px-2 py-4 text-2xl focus:outline-none border-2 focus:border-pink-400"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-4 px-4 py-3 bg-pink-400 hover:bg-pink-500 active:bg-pink-400 rounded-md"
        type="submit"
        value="생성"
      />
    </form>
  );
};
// 값을 onsubmitcreateTodo로 보내고, 그 값이 없으면 return을 하고, 값이 있으면 dispatch로 createTodo를 실행한다.

export default CreateTodo;
