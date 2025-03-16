import React, { useState } from "react";

export default function TodoList({ todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text || "");

  const handleEdit = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
        </>
      ) : (
        <p>{todo.text}</p>
      )}

      {isEditing ? (
        <>
          <button onClick={handleEdit}>save</button>
          <button onClick={() => setIsEditing(false)}>cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
}
