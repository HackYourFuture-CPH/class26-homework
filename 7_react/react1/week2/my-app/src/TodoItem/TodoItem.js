import "./TodoItem.css"

export default function TodoItem(props) {
    const decorateDone = props.done ? 
        <span><s>{props.description}</s></span> 
        :<span>{props.description}</span>

    return (
        <li className="todoItem">
            {decorateDone}
            <input
                type="checkbox"
                checked={props.done}
                onChange={() => {props.onUpdateItem(props.id)}} />
            <button className="delete-button" onClick={() => props.onDeleteItem(props.id)}>Delete</button>
        </li>
    );
}
