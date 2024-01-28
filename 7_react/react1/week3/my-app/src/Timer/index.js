import { useEffect, useState } from "react";

export default function Timer(){
    const [time, setTime] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(prevTime => {
                return prevTime+1
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return (
        <p>You have used {time} seconds on this website.</p>
    )
}