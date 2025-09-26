import { useCallback, useRef, useState } from 'react';
import getTimeStr from '../utils/getTimeStr';

const UPDATE_INTERVAL = 1000;

function useClock() {
  const [time, setTime] = useState(getTimeStr(new Date()));
  const [isClockStop, setIsClockStop] = useState(false);
  const intervalIdRef = useRef(null);

  const startClock = useCallback(() => {
    if (intervalIdRef.current !== null) return;

    intervalIdRef.current = setInterval(() => setTime(getTimeStr(new Date())), UPDATE_INTERVAL);
  }, []);

  const stopClock = useCallback(() => {
    if (intervalIdRef.current === null) return;

    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  }, []);

  const toggleClock = useCallback(() => {
    setIsClockStop((prev) => {
      const nextIsClockStop = !prev;

      if (nextIsClockStop) {
        stopClock();
      } else {
        startClock();
      }

      return nextIsClockStop;
    });
  }, [startClock, stopClock]);

  return { time, isClockStop, startClock, stopClock, toggleClock };
}

export default useClock;
