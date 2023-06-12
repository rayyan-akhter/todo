import React, { useState } from "react";
import "./style.css";
import deleteIcon from "./assets/delete.png";
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
    // e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  const handlekeyPress =(e)=>{
    if(e.key==="Enter") {
        addTodo();
    }
  };

  const deleteTodo =(index)=>{
    const updateTodo =todos.filter((_,item)=> item !== index);
    setTodos(updateTodo);
    
  };

  return (
    <main>
      <div className="child">
        
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handlekeyPress}
          className="inputFeild"
          placeholder="Text here"
          />
        <button onClick={addTodo} className="addBtn" >+</button>
          
        
      </div>
      <div className="secondChild">
        <ul className="todoList">
          {todos.map((todo, index) => (
            <li className="todo" key={index}>{todo}
            <img src={deleteIcon} alt="delete icon" className="dltIcon" onClick={() => deleteTodo(index)}/>
            </li>
    
          ))}
        </ul>
      </div>
    </main>
  );
};
