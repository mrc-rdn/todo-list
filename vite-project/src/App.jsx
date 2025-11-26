import { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { API_URL } from "./components/api";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error("Error fetching todos", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (description) => {
    try {
      const res = await axios.post(`${API_URL}/todos`, { description });
      setTodos([...todos, res.data]);
    } catch (err) {
      console.error("Error adding todo", err);
    }
  };

  const updateTodo = async (id, description) => {
    try {
      await axios.put(`${API_URL}/todos/${id}`, { description });
      setTodos(todos.map(todo => todo.id === id ? { ...todo, description } : todo));
    } catch (err) {
      console.error("Error updating todo", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (err) {
      console.error("Error deleting todo", err);
    }
  };

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
