import React from "react";
import TodoItems from "./TodoItems";

const Todo = (props) => {
  const { todos, removeTodo, completedTodo } = props;
  return todos.length ? (
    <div>
      <ul>
        {todos.map((todo) => {
          const props = { todo, removeTodo, completedTodo };
          return <TodoItems key={todo.id} {...props} />;
        })}
        {console.log("run")}
      </ul>
    </div>
  ) : (
    <div>
      <h4>No Todos Yet</h4>
    </div>
  );
};

export default Todo;
