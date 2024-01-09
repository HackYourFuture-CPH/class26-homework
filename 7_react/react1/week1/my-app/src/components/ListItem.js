import DeadLine from './DeadLine';

export default function ListItem(props) {
    return (
        <li> {props.description}, <DeadLine deadline={props.deadline} /></li>
    )
}