import { useEffect, useState } from 'react';


const Employees = () => {
  const [data, setData] = useState([]);

  const fetchData = async ()=>{

    try {
        let res = await fetch('https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw')
        let data = await res.json()
        setData(data)
    }catch(error){
        console.log("NOOOOOOOOOO")
    }
}
    
    useEffect(() => {
        fetchData()
    }, [])

    const onDelete = (employeesName) => {
        setData((previousEmployees) => previousEmployees.filter((Employees) => Employees.name !== employeesName))
    }

    return (
        <div>
        {
            data.map(items => <p>{items.name}<button onClick={() => onDelete(items.name)}>delete me!</button></p>)
        }
        </div>
    )
}

export default Employees