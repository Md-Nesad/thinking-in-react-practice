import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //store todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //add todo
  const addTodo = (newTodo) => {
    if (newTodo.trim() === "") return alert("Write something!");
    const singleTodo = {
      id: Date.now(),
      text: newTodo.trim(),
      done: false,
    };
    setTodos([...todos, singleTodo]);
    setNewTodo("");
  };
  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //handle edit
  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div>
      <h1>To-do List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={() => addTodo(newTodo)}>Add</button>

      <div>
        {todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
            onEdit={handleEdit}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
