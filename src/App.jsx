import { useState } from 'react';
import './App.css';
import Clock from './Clock';

function App() {
  const [componentRunning, setComponentRunning] = useState(true);
  const handleComponentToggle = () => setComponentRunning(!componentRunning);

  return (
    <>
      <div className="container">
        <Clock running={componentRunning} />
        <button onClick={handleComponentToggle} className={componentRunning && 'running'}>
          {componentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
        </button>
      </div>
    </>
  );
}

export default App;
