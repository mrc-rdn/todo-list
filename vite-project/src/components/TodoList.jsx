import { useState } from "react";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.description);
  };

  const handleUpdate = (id) => {
    updateTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{ marginBottom: "0.5rem" }}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
            </>
          ) : (
            <>
              {todo.description}{" "}
              <button onClick={() => handleEdit(todo)}>Edit</button>{" "}
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
