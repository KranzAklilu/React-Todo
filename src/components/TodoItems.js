import React from "react";

const TodoItems = (props) => {
  const { todo, completedTodo, removeTodo } = props;
  const completedStyle = {
    textDecoration: "line-through",
  };
  const notCompletedStyle = {
    textDecoration: "none",
  };
  const style = todo.completed ? completedStyle : notCompletedStyle;

  return (
    <div>
      <li style={{ ...style }}>{todo.title}</li>
      <button onClick={() => completedTodo(todo.id)}>Completed</button>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItems;
