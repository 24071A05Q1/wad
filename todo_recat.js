import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAdd = () => {
    if (!title || !date) {
      alert("Fill all fields");
      return;
    }

    const newTodo = {
      title,
      date,
      status: false
    };

    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = newTodo;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }

    setTitle("");
    setDate("");
  };

  // Delete
  const handleDelete = (index) => {
    const filtered = todos.filter((_, i) => i !== index);
    setTodos(filtered);
  };

  // Edit
  const handleEdit = (index) => {
    setTitle(todos[index].title);
    setDate(todos[index].date);
    setEditIndex(index);
  };

  // Toggle Status
  const toggleStatus = (index) => {
    const updated = [...todos];
    updated[index].status = !updated[index].status;
    setTodos(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>TODO Application</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <table border="1" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Target Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.title}</td>
              <td>{todo.date}</td>

              <td>
                <input
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => toggleStatus(index)}
                />
                {todo.status ? " True" : " False"}
              </td>

              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/*
npx create-react-app todo-app
cd todo-app
npm start 
*/


export default App;
