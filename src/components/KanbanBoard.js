import React, { useState } from "react";
import Column from "./Column";
import "../App.css";

const initialTasks = {
  todo: [],
  inProgress: [],
  done: [],
};
const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const handleAddTask = (column, newTask) => {
    setTasks((prev) => ({
      ...prev,
      [column]: [...prev[column], newTask],
    }));
  };
  const handleEditTask = (column, updatedTask) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column]?.map((t) =>
        t.id === updatedTask.id ? updatedTask : t
      ),
    }));
  };
  const handleDeleteTask = (column, taskId) => {
    setTasks((prev) => ({
      ...prev,
      [column]: prev[column]?.filter((t) => t.id !== taskId),
    }));
  };
  const handleMoveTask = (from, to, taskId) => {
    const taskMove = tasks[from].find((task) => task.id === taskId);
    if (!taskMove || from === to) return;
    setTasks((prev) => ({
      ...prev,
      [from]: prev[from]?.filter((t) => t.id !== taskId),
      [to]: [...prev[to], taskMove],
    }));
  };
  return (
    <div className="kanban-container">
      <div className="search-container">
        <input
          type="text"
          value={search}
          className="input-search"
          placeholder="Search Task here"
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        />
      </div>

      <div className="kanban-board">
        {Object.keys(tasks)?.map((column) => (
          <Column
            key={column}
            column={column}
            tasks={tasks[column]?.filter((task) =>
              task.title.toLocaleLowerCase().includes(search)
            )}
            onAdd={handleAddTask}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
            onMove={handleMoveTask}
          />
        ))}
      </div>
    </div>
  );
};
export default KanbanBoard;
