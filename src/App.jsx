import { useState } from 'react';
import Clock from './components/Clock';
import Button from './components/Button';
import './App.css';

function App() {
  const [isComponentRunning, setIsComponentRunning] = useState(false);

  const handleComponentToggle = () => setIsComponentRunning((prev) => !prev);

  return (
    <div className="container">
      <Button onClick={handleComponentToggle} isActive={isComponentRunning} className={'toggle-button'}>
        {isComponentRunning ? '컴포넌트 정지' : '컴포넌트 시작'}
      </Button>
      {isComponentRunning && <Clock />}
    </div>
  );
}

export default App;
