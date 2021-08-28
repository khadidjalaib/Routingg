import { useState } from "react";
import { nanoid } from "nanoid";

const InputBar = (props) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const obj = {
            id: nanoid(),
            tache: input,
          };

          props.setList([...props.list, obj]);
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
