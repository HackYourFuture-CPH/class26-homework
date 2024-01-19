import React from "react";

export function ListItem({ id, description, done, markAsDone, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => markAsDone(id)}
      />
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {description}
      </span>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </li>
  );
}
