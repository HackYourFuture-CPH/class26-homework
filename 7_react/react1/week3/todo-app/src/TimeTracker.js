import React, { useEffect, useState } from 'react';

const TimeTracker = () => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>You have used: {elapsedTime} seconds on this website</p>
    </div>
  );
};

export default TimeTracker;
