import { useEffect } from 'react';
import useClock from '../hooks/useClock';
import Button from './Button';
import TimeDisplay from './TimeDisplay';

function Clock() {
  const { time, isClockStop, startClock, stopClock, toggleClock } = useClock();

  useEffect(() => {
    startClock();
    return stopClock;
  }, [startClock, stopClock]);

  return (
    <div className="timer-container">
      <h1>RealTime Clock</h1>
      <TimeDisplay time={time} />
      <Button onClick={toggleClock} isActive={!isClockStop} className={'toggle-button'}>
        {isClockStop ? '타이머 시작' : '타이머 정지'}
      </Button>
    </div>
  );
}

export default Clock;
