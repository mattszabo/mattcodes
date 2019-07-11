import React, { useState } from 'react'
import CounterButton from './CounterButton'

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>React Hooks Clicker</h1>
      <p>You've clicked {count} times</p>
      <CounterButton handleClick={handleButtonClick} text="Click me" />
    </div>
  )
}

export default Counter;
