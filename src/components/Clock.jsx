import { useEffect } from 'react';
import useClock from '../hooks/useClock';
import Button from './Button';

function Clock() {
  const { time, isClockStop, startClock, stopClock, toggleClock } = useClock();

  useEffect(() => {
    startClock();
    return stopClock;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="timer-container">
      <h1>RealTime Clock</h1>
      <div className="timer__time-container">
        {time.split('').map((str, idx) => (
          <p key={idx}>{str}</p>
        ))}
      </div>
      <Button clickHandler={toggleClock} isActive={!isClockStop}>
        {isClockStop ? '타이머 시작' : '타이머 정지'}
      </Button>
    </div>
  );
}

export default Clock;
