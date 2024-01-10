import "./TodoItem.css"

function TodoItem(props){

    return(
        <>
        
        
            <li className="todoItem">&#9733;{props.description},{props.deadline}</li>
        
        
        
     {/*  <p className="todoItem">&#9733;{props.description},{props.deadline}</p>*/}
       
        </>
    );
}

export default TodoItem