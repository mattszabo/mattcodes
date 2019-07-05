import React from 'react';

const CounterButton = props => {
	return <button onClick={props.handleClick}>{props.text}</button>;
};

export default CounterButton;
