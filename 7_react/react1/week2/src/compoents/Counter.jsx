import { useState, useEffect } from "react";

function Counter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <p>You have used {seconds} second{seconds !== 1 ? 's' : ''} on the website</p>
  );
}

export default Counter;