import { useState } from 'react';
import Clock from './components/Clock';
import Button from './components/Button';
import './App.css';

function App() {
  const [componentRunning, setComponentRunning] = useState(false);

  const handleComponentToggle = () => setComponentRunning((prev) => !prev);

  return (
    <div className="container">
      <Button clickHandler={handleComponentToggle} isActive={componentRunning}>
        {componentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
      </Button>
      {componentRunning && <Clock />}
    </div>
  );
}

export default App;
