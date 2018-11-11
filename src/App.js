import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => {
		setCount(count + 1);
	};

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={handleButtonClick}>Click me</button>
		</div>
	);
};

export default App;
