import React, { useState } from 'react';
import BorderWrapper from './BorderWrapper';

const ListItem = ({ id, description, done, markAsDone, deleteTask, editTask }) => {
  const [editedDescription, setEditedDescription] = useState(description);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditSubmit = () => {
    editTask(id, editedDescription);
    setIsEditing(false);
  };

  return (
    <BorderWrapper>
    <li>
      <input
        type="checkbox"
        checked={done}
        onChange={() => markAsDone(id)}
      />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>{description}</span>
      {!isEditing ? (
        <>
          <button onClick={() => setIsEditing(true)}>Edit Task</button>
          <button onClick={() => deleteTask(id)}>Delete Task</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <button onClick={handleEditSubmit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      )}
    </li>
    </BorderWrapper>
  );
};

export default ListItem;
