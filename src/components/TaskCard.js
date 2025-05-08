import React, { useState } from "react";

const TaskCard = ({ task, column, onEdit,onDelete }) => {
  const [edit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task?.title);
  const [points, setPoints] = useState(task?.points);
  const handleSave = () => {
    onEdit(column, { ...task, title, points });
    setIsEdit(false);
  };
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("from", column);
  };
  return (
    <div className="task-card" draggable onDragStart={handleDragStart}>
      {edit ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h4>{task?.title}</h4>
          <p>Points: {task?.points}</p>
          <button onClick={() => setIsEdit(true)}>Edit</button>
          <button onClick={() => onDelete(column,task.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TaskCard;
