import { useRef, useState } from 'react';
import getTimeStr from '../utils/getTimeStr';

function useClock() {
  const [time, setTime] = useState(getTimeStr(new Date()));
  const [isClockStop, setIsClockStop] = useState(false);
  const intervalIdRef = useRef(null);

  const startClock = () => {
    intervalIdRef.current = setInterval(() => setTime(getTimeStr(new Date())), 1000);
  };
  const stopClock = () => clearInterval(intervalIdRef.current);
  const toggleClock = () => {
    const newIsClockStop = !isClockStop;
    newIsClockStop ? stopClock() : startClock();
    setIsClockStop(newIsClockStop);
  };

  return { time, isClockStop, startClock, stopClock, toggleClock };
}

export default useClock;
