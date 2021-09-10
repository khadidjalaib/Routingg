import { useState } from "react";
import { nanoid } from "nanoid";
import {useSelector,useDispatch} from "react-redux";
import actions from "../../../actions/todo";

const InputBar = (props) => {
  const [input, setInput] = useState("");
   const todo =useSelector((state)=>state.todo)
  const dispatch=useDispatch();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const obj = {
            id: nanoid(),
            tache: input,
          };
             dispatch(
               actions.todolist(obj)
             )
          
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
