import { useState } from "react"

export function ListItem(props) {
    const {id, description, deleteItem } = props;
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <li key = {id} style={{ textDecorationLine: checked ?  'line-through' :'none'}}> {description}
            <input 
            type="checkbox" 
            checked={checked}
            onChange={handleChange}>
            </input>
            <button onClick={()=>deleteItem(id)}>Delete</button>
        </li>
    );
}