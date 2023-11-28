import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "./redux/appThunk";
import CreateTodo from "./components/CreateTodo";

const App = () => {
  const { todos } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="bg-red-100">
      <CreateTodo />
    </div>
  );
};

export default App;
