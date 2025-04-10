import { useEffect, useState } from 'react';

function Clock({ running }) {
  function getTime() {
    const now = new Date();
    const hour = now.getHours();
    const hour12 = `${hour === 0 ? 12 : hour > 12 ? hour - 12 : hour}`.padStart(2, '0');
    const minute = `${now.getMinutes()}`.padStart(2, '0');
    const second = `${now.getSeconds()}`.padStart(2, '0');
    return `${hour12} : ${minute} : ${second}`;
  }

  const [clock, setClock] = useState(getTime);

  useEffect(() => {
    let timerId = null;
    if (running) {
      timerId = setInterval(() => setClock(getTime), 1000);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [running]);

  return <div className="timer-container">{clock}</div>;
}

export default Clock;
