import React, { createContext, useState } from "react";
const uuid = require("uuid");

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { title: "Learn React", id: uuid.v1(), completed: true },
    { title: "Learn Node", id: uuid.v4() },
  ]);
  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuid.v1() }]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const completedTodo = (id) => {
    const completed = todos.find((todo) => todo.id === id);
    completed.completed = true;
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, completedTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
