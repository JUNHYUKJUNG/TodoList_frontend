import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { toggleDone } from "../redux/appThunk";

const TodoCard = ({ index, id, title, isDone }) => {
  const dispatch = useDispatch();

  const onClickIsDone = () => {
    dispatch(toggleDone({ todoId: id }));
  };

  return (
    <li
      className={`w-96 py-2 text-2xl flex ${
        index % 2 ? "bg-white" : "bg-gray-200"
      }`}
    >
      <span className="w-1/12 inline-block">{id}</span>
      <button
        className={`w-7/12 ${isDone && "line-through"}`}
        onClick={onClickIsDone}
      >
        {title}
      </button>
      <button className="w-2/12 px-5 hover:text-gray-500">
        <FiEdit3 />
      </button>
      <button className="w-2/12 px-5 hover:text-gray-500">
        <FiTrash2 />
      </button>
    </li>
  );
};

export default TodoCard;
