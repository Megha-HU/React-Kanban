import React from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const Column = ({ column, tasks, onAdd, onEdit, onDelete, onMove }) => {
  const handleDrop = (e) => {
    const taskId = e.dataTransfer.getData("taskId");
    const from = e.dataTransfer.getData("from");
    onMove(from, column, taskId);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2>{column.toLocaleUpperCase()}</h2>
      {column === "todo" && <TaskForm onSubmit={(task) => onAdd(column, task)} />}
      {tasks?.map((task) => (
        <TaskCard key={task.id} task={task} column={column} onEdit={onEdit} onDelete={onDelete}/>
      ))}
    </div>
  );
};
export default Column;
