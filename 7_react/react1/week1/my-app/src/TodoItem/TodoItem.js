import "./TodoItem.css"

function TodoItem(props){

    return(
        <>
        
        
            <ul className="todoItem">&#9733;{props.description},{props.deadline}</ul>
        
        
        
     {/*  <p className="todoItem">&#9733;{props.description},{props.deadline}</p>*/}
       
        </>
    );
}

export default TodoItem