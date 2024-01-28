import { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateTask({ addNewTask }) {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState(new Date());

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description) {
            return window.alert('Please add a task description')
        }

        const date = new Date()

        deadline.setHours(0, 0, 0, 0)

        date.setHours(0, 0, 0, 0)

        if (deadline < date) {
            return window.alert('Please select a deadline in present or future')
        }

        addNewTask(description, deadline)

        setDescription('')
        setDeadline(new Date())
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="newTask">Todo description</label><br />
            <input
                id="newTask"
                type="text"
                placeholder="Enter a Task..."
                value={description}
                required
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <label >Deadline</label>
            <div>
                <DatePicker selected={deadline} onChange={(date) => setDeadline(date)} />
            </div>
            <button type="submit">Add Task</button>
        </form>
    )
}