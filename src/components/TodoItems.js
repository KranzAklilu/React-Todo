import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItems = ({ todo }) => {
  const { removeTodo, completedTodo } = useContext(TodoContext);
  const [completed, setCompleted] = useState([]);

  return (
    <div>
      <li>{todo.title}</li>
      <button onClick={() => completedTodo(todo.id)}>Completed</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
