import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItems from "./TodoItems";
import Form from "./Form";
import CompletedTodo from "./CompletedTodo";

const Todo = (props) => {
  const { todos, addTodo } = useContext(TodoContext);
  return todos.length ? (
    <div>
      <ul>
        {todos.map((todo) => {
          return todo.completed ? (
            <CompletedTodo key={todo.id} todo={todo} />
          ) : (
            <TodoItems key={todo.id} todo={todo} />
          );
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
