import React, { useState } from "react";
import "./style.css";
import deleteIcon from "./assets/delete.png";
import editIcon from "./assets/edit.png";
import doneIcon from "./assets/done.png";
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
    if (input === "") {
      return alert("Enter something to do...");
    } else {
      const allInput = { id: Math.random() * 1000, name: input };
      console.log(allInput);
      setTodos([...todos, allInput]);
      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const updateTodo = todos.filter((obj) => obj.id !== id);
    setTodos(updateTodo);
  };

  console.log(todos);

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
          {todos.map((todo) => {
            return (
              <Todo
                todos={todos}
                setTodos={setTodos}
                deleteTodo={deleteTodo}
                todo={todo}
                key={todo.id}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

function Todo({ deleteTodo, todo, todos, setTodos }) {
  const [editMode, setEditMode] = useState(false);
  const [inputValue, setInputValue] = useState(todo.name);
  const [done, setDone] = useState(false);

  const onInputChange = (e) => {
    const newValue = e.target.value;
    // todos.name = newValue;
    setInputValue(newValue);
    console.log(inputValue);
  };

  const saveChanges = () => {
    console.log(todo);
    if (inputValue === "") {
      deleteTodo(todo.id);
      console.log("delete");
    } else {
      const updatedTodos = [...todos];
      setDone(false);
      const idx = todos.findIndex((obj) => obj.id === todo.id);
      updatedTodos[idx].name = inputValue;
      setTodos(updatedTodos);
    }
    setEditMode(false);
  };
  const toggleDone = () => {
    setDone((prev) => !prev);
    console.log(done);
  };
  return (
    <li className="todo">
      {editMode ? (
        <input value={inputValue} onChange={onInputChange} />
      ) : (
        <p className={done ? "inputValue" : ""}>{inputValue}</p>
      )}
      <div className="iconContainer">
        {!done && (
          !editMode ? (
            <img
              src={editIcon}
              alt="edit icon"
              className="icon"
              onClick={() => setEditMode(true)}
            />
          ) : (
            <button onClick={saveChanges}>done</button>
          )
        )}
        <img
          src={deleteIcon}
          alt="delete icon"
          className="icon"
          onClick={() => deleteTodo(todo.id)}
        />
        <img
          src={doneIcon}
          className={"icon"}
          alt="check icon"
          onClick={toggleDone}
        />
      </div>
    </li>
  );
}
