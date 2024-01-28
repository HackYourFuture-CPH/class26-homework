import { useState } from "react";
import "./TodoItem.css"
import PropTypes from 'prop-types';

export default function TodoItem(props) {
    const [editing, setEditing] = useState(false)
    const [description, setDescription] = useState(props.description);

    const date = new Date(props.deadline)

    const deadLineText = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`

    const decorateDone = props.done ?
        <span><s>{props.description} | {deadLineText}</s></span>
        : <span>{props.description } | {deadLineText}</span>

    const onInputChange = (e) => {
        setDescription(e.target.value)
    }

    const handleUpdateDescription = () => {
        if (!editing) {
            setEditing(true)
        } else {
            if (!description) {
                window.alert('Description can\'t be empty')
            } else {
                props.onUpdateItem(props.id, 
                    description,
                    props.done
                )
                setEditing(false)
            }
        }
    }

    const handleUpdateStatus = (status) => {
        props.onUpdateItem(props.id, 
            props.description,
            status
        )
    }

    return (
        <li key={props.taskId} className="todoItem">
            {
                editing ? <input
                    id="editTask"
                    type="text"
                    value={description}
                    onChange={onInputChange}
                /> :
                    decorateDone
            }
            <input
                type="checkbox"
                checked={props.done}
                onChange={() => handleUpdateStatus(!props.done)} />
            <button className="delete-button" onClick={() => props.onDeleteItem(props.id)}>Delete</button>
            <button className="edit-button" onClick={handleUpdateDescription}>{
                editing ? 'Update' : 'Edit'
            }</button>
        </li>
    );
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    deadline: PropTypes.object.isRequired,
    done: PropTypes.bool.isRequired,
    onUpdateItem: PropTypes.func.isRequired,
    onDeleteItem: PropTypes.func.isRequired
}
