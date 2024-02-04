import { useState } from "react"

export function ListItem(props) {
    const {id, description, deadline, deleteItem } = props;
    const [checked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };
    const handleEdit= (event) => {
        event.preventDefault();
        setIsEditing(true);
    };

     
    if (isEditing) {
        return (
            <li style={{ textDecorationLine: checked ?  'line-through' :'none'}}> 
                
     
                <input 
                type="checkbox" 
                checked={checked}
                onChange={handleChange}>
                </input>
                <button onClick={()=>deleteItem(id)}>Delete</button>
                <button >Edit</button>
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
                <button onClick={()=>deleteItem(id)}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </li>
        );
    }

}