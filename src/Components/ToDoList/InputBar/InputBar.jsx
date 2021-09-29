import { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../../actions/todo";
import axios from "axios";

const InputBar = (props) => {
  const [input, setInput] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const reponse = await axios.post("http://localhost:5000/todos", {
            task: input,
            completed: false,
          });
          const obj = reponse.data.data;
          dispatch(actions.todolist(obj));

          setInput("");
        }}
      >
        <input
          value={input}
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => {
            setInput(e.target.value);
            console.log(input);
          }}
        />
      </form>
    </div>
  );
};

export default InputBar;
