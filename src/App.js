import React, { useState } from "react";
import Todo from "./components/Todo";
import Form from "./components/AddTodo";
const uuid = require("uuid");

function App() {
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
    const completedIndex = todos.findIndex((todo) => todo.id === id);
    const completedArray = [...todos];
    completedArray[completedIndex] = {
      ...completedArray[completedIndex],
      completed: !completedArray[completedIndex].completed,
    };
    setTodos(completedArray);
  };
  const props = { todos, addTodo, removeTodo, completedTodo };
  return (
    <div className="App">
      <Form {...props} />
      <Todo {...props} />
    </div>
  );
}

export default App;
