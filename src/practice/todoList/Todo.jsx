import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() === "") return alert("write something..");
    //create a todo object
    const todoObj = {
      id: Date.now(),
      text: text,
    };
    //update state
    setTodos([...todos, todoObj]);
    setText("");
  };

  //deleteTodo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <h1>Todo application</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addTodo(text)}>Add todo</button> <br />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}
