import React, { useState } from "react";
import "./style.css";
import deleteIcon from "./assets/delete.png";
import editIcon from "./assets/edit.png";
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

  console.log(todos);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (input === "") {
      return alert("Enter something to do...");
    } else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setTodos([...todos, allInput]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updateTodo = todos.filter((_, item) => item !== index);
    setTodos(updateTodo);
  };

  return (
    <main>
      <form className="child" onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="inputFeild"
          placeholder="Text here"
        />

        <button className="addBtn">Add</button>
      </form>
      <div className="secondChild">
        <ul className="todoList">
          <h1>TODAY</h1>
          {todos.map((todo, idx, id) => (
            <Todo todos={todos} deleteTodo={deleteTodo} todo={todo} idx={id} />
          ))}
        </ul>
      </div>
    </main>
  );
};

function Todo({ deleteTodo, todo, idx, todos }) {
  const [editMode, setEditMode] = useState(false);

  const [inputValue, setInputValue] = useState(todo.name);

  const onInputChange = (e) => {
    const newValue = e.target.value;
    todos.name = newValue;
    setInputValue(newValue);
  };
  console.log(idx);
  return (
    <li className="todo" key={idx}>
      {editMode ? (
        <input value={inputValue} onChange={onInputChange} />
      ) : (
        <p>{inputValue}</p>
      )}
      <div className="iconContainer">
        {!editMode ? (
          <img
            src={editIcon}
            alt="edit icon"
            className="edtIcon"
            onClick={() => setEditMode(true)}
          />
        ) : (
          <button onClick={() => setEditMode(false)}>done</button>
        )}
        <img
          src={deleteIcon}
          alt="delete icon"
          className="dltIcon"
          onClick={() => deleteTodo(idx)}
        />
      </div>
    </li>
  );
}
