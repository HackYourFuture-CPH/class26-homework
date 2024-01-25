import React, {useState, useEffect, useCallback} from "react";
const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"

const DataFetching = (props) => {
    const [list, setList] = useState([])

    const addList = useCallback(() => {
        fetch (API_URL)
        .then(res => res.json())
        .then (result => {
            const { data } = result
            setList((lastState) => {
                return list.concat(data)

            }
            )
        })
    }, [])
    useEffect(() => {
        addTodo()
    }, [addTodo])

    console.log(list)
    return (
        <div>
            Fetch my data
            <button onClick={addTodo}>Add todo</button>
        </div>
    )

}
export default DataFetching;
