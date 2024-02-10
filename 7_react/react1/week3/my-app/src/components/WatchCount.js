
import { useEffect } from "react"
import{useState} from "react"

export function WatchCount() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    });

    return <div>{count}</div>;
}