import React, { useState } from 'react';
import CounterButton from './components/CounterButton';

const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Hooks Clicker</h1>
      <p>You clicked {count} times</p>
      <CounterButton handleClick={handleButtonClick} text="Click me" />
    </div>
  );
};

export default App;
