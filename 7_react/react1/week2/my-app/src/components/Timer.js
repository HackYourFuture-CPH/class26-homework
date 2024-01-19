import { useState, useEffect } from 'react'

export default function Timer(props) {
    const [timeSpend, setTimeSpend] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeSpend(time => time + 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [])

    return (
        <h3>You have used {timeSpend} seconds on this website</h3>
    )
}