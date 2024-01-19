
import './ListItem.css'

export default function ListItem(props) {
    return (
        <li className={props.completed ? 'completed' : ''}> {props.description} </li>
    )
}

