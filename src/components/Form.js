import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const Form = (props) => {
  const { todos, addTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Input Todo</label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <input type="submit" value="Add Todo"></input>
    </form>
  );
};

export default Form;
