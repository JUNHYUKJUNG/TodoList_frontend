import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";
import TodoCard from "./components/TodoCard";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todos) return;

    dispatch(getTodos());
  }, [todos, dispatch]);
  // 어느 시점에 getTodos를 실행할 것인지 정한다.

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="min-h-screen max-w-screen-md mx-auto mt-20 flex flex-col items-center">
      <CreateTodo />
      <ul className="mt-12 flex flex-col">
        {todos?.map((v, i) => (
          <TodoCard
            key={i}
            index={i}
            id={v.id}
            title={v.title}
            isDone={v.isDone}
          />
        ))}
      </ul>
    </div>
    // todos?.map은 todos && todos.map과 같다.
  );
};

export default App;
