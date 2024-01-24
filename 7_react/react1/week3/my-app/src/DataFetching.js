import React, {useState, useEffect, useCallback} from "react";
const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"

const DataFetching = (props) => {
    const [list, setList] = useState([])

    const addList = useCallback(() => {
        fetch (API_URL)
        .then(res => res.json())
        .then (result => {
            const { data } = result
            const nextList = list.concat(data)
            setList(nextList)
        })
    }, [])
    useEffect(() {
        addTodo()
    }, [])

    return (
        <div>
            Fetch my data
        </div>
    )

}