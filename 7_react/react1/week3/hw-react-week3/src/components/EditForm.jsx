import { useState } from "react";

const EditForm = ({ task, onCancel, onSave }) => {
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      description: editedDescription,
      dueDate: editedDueDate,
    });
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label for="description">Description:</label>
        <input
          type="text"
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
        <label for="due date">Due Date:</label>
        <input
          type="date"
          value={editedDueDate}
          onChange={(e) => setEditedDueDate(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
