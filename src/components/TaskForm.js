import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title,
      points,
    };
    onSubmit(newTask);
    setTitle("");
    setPoints(1);
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Task Name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        value={points}
        min="1"
        onChange={(e) => setPoints(Number(e.target.value))}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default TaskForm;
