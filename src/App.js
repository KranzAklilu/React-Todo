import React from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import TodoContextProvider from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Form />
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
