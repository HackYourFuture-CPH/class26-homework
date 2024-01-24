// TodoItem.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Border from './Border'; 

const TodoItem = ({ id, description, deadline, done, toggleDone, deleteTask, handleEditTask }) => {
  const [editing, setEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedDeadline, setEditedDeadline] = useState(deadline);

  const handleEditInputChange = (e, field) => {
    if (field === 'description') {
      setEditedDescription(e.target.value);
    } else if (field === 'deadline') {
      setEditedDeadline(e.target.value);
    }
  };

  const handleEditSave = () => {
    handleEditTask(id, editedDescription, editedDeadline);
    setEditing(false);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedDescription(description);
    setEditedDeadline(deadline);
  };

  const handleDeleteTask = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id);
    }
  };

  const renderTask = () => {
    return (
      <Border>
        <div style={{ textDecoration: done ? 'line-through' : 'none' }}>
          <input type="checkbox" checked={done} onChange={toggleDone} />
          <span>{description} {deadline}</span>
          <button onClick={handleDeleteTask}>Delete</button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      </Border>
    );
  };

  const renderEditForm = () => {
    return (
      <Border>
        <div>
          <input type="text" value={editedDescription} onChange={(e) => handleEditInputChange(e, 'description')} />
          <input type="date" value={editedDeadline} onChange={(e) => handleEditInputChange(e, 'deadline')} />
          <button onClick={handleEditSave}>Save</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      </Border>
    );
  };

  return editing ? renderEditForm() : renderTask();
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  deadline: PropTypes.number.isRequired,
};

export default TodoItem;
