import React from 'react';
import { compose, setDisplayName, withStateHandlers } from 'recompose';
import styles from './dropdown.css';

const initialState = { expanded: false };

const withMenuItem = item => <div>{item}</div>;

export default compose(
	withStateHandlers(() => initialState, {
		toggleExpanded: ({ expanded }) => () => {
			console.log(expanded);
			return {
				expanded: !expanded,
			};
		},
	}),
	setDisplayName('Dropdown')
)(({ expanded, toggleExpanded, menuItems }) => {
	return (
		<div className={styles.label} onClick={toggleExpanded}>
			dropdown
			<div className={`${styles.menu} ${expanded ? styles.open : styles.closed}`}>
				{withMenuItem('one')}
				{withMenuItem('two')}
				<div>three</div>
			</div>
		</div>
	);
});
