import React from 'react';
import { Link } from 'react-router-dom';
import { compose, setDisplayName, withStateHandlers } from 'recompose';
import { prop } from 'ramda';
import styles from './dropdown.css';

const initialState = { expanded: false };

const NavListItem = ({ to, label }) => (
	<li>
		<Link to={to}>{label}</Link>
	</li>
);

export default compose(
	withStateHandlers(() => initialState, {
		toggleExpanded: ({ expanded }) => () => {
			return {
				expanded: !expanded,
			};
		},
	}),
	setDisplayName('Dropdown')
)(({ expanded, toggleExpanded, item }) => {
	const menu = prop('subMenu', item);

	return (
		<div className={styles.label} onClick={toggleExpanded}>
			{item.label}
			<ul className={`${styles.menu} ${expanded ? styles.open : styles.closed}`}>
				{menu.map((item, id) => {
					const { label, path } = item;
					const to = path
						? path
						: label.toLowerCase() === 'home'
							? '/'
							: label.toLowerCase();
					return <NavListItem key={id} label={label} to={to} />;
				})}
			</ul>
		</div>
	);
});
