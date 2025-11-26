import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    addTodo(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a todo"
        style={{ padding: "0.5rem", width: "300px" }}
      />
      <button type="submit" style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>
        Add
      </button>
    </form>
  );
}
