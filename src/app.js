import React, { useState } from "react";
export const App = () => {
  return (
    <>
      <TodoList />
    </>
  );
};

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };



  return (
    <main>
      <div>
        <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}

          placeholder="Text here"
          />
        <button >+</button>
          </form>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </main>
  );
};
