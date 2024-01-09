import ListItem from './ListItem'

export default function ToDoList(props) {
    return (
        <ul>
            {
                props.toDoList.map((element, i) => {
                    return <ListItem key={i} description={element.description} deadline={element.deadline} />
                })
            }
        </ul>
    )
}

