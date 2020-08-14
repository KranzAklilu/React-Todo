import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/AddTodo";
const uuid = require("uuid");

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((json) => setTodos([...json]));
  }, []);

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
      <TodoList {...props} />
    </div>
  );
}

export default App;
