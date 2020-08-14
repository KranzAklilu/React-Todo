import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, removeTodo, completedTodo } = props;
  return todos.length ? (
    <div>
      <ul>
        {todos.map((todo) => {
          const props = { todo, removeTodo, completedTodo };
          return <Todo key={todo.id} {...props} />;
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h4>No Todos Yet</h4>
    </div>
  );
};

export default TodoList;
