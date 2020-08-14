import React, { useState } from "react";

const Form = (props) => {
  const { addTodo } = props;
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
