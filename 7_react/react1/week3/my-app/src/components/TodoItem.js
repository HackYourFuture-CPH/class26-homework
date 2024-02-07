import { useState } from "react"

export function TodoItem(props) {
    const {id, description, deadline, deleteItem} = props;
    const [checked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    const handleEdit= (event) => {
        // event.preventDefault(); type button 
        setIsEditing(true);
    };
const [newTodo, setNewTodo] = useState(description);
const handelDescriptionEdit= (e) =>{
    setNewTodo(e.target.value)
   
}

function  handelDelete(){
    deleteItem(id);
 }
     

 function  handelUpDate (){
    setIsEditing(false);
 }
     
    if (isEditing) {
        return (
            <li style={{ textDecorationLine: checked ?  'line-through' :'none'}}> 
                
     <input type ="text" value={newTodo} onChange={handelDescriptionEdit} ></input>
                <input 
                type="checkbox" 
                checked={checked}
                onChange={handleChange}>
                </input>
                <button onClick={handelDelete}>Delete</button>
                <button onClick={handelUpDate}  >UpDate</button>
            </li>
        );
    }else {
        return (
            <li style={{ textDecorationLine: checked ?  'line-through' :'none'}}> 
                {description} | {deadline}
                <input 
                type="checkbox" 
                checked={checked}
                onChange={handleChange}>
                </input>
                <button type="button" onClick={handelDelete}>Delete</button>
                <button type="button" onClick={handleEdit}>Edit</button>
            </li>
        );
    }

}