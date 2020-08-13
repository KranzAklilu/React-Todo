import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const CompletedTodo = ({ todo }) => {
  const { removeTodo } = useContext(TodoContext);
  return (
    <div>
      <li style={{ textDecoration: "line-through" }}>{todo.title}</li>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default CompletedTodo;
