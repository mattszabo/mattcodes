import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { has } from 'ramda';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown/Dropdown';
import styles from './styles.css';

const NavListItem = ({ to, label }) => (
	<li>
		<Link to={to}>{label}</Link>
	</li>
);

export default compose(setDisplayName('Navbar'))(({ items }) => {
	return (
		<ul className={styles.navList}>
			{items.map((item, id) => {
				const { label, path } = item;
				const to = path
					? path
					: label.toLowerCase() === 'home'
						? '/'
						: label.toLowerCase();

				if (has('subMenu', item)) {
					return <Dropdown key={id} item={item} />;
				}
				return <NavListItem key={id} label={label} to={to} />;
			})}
		</ul>
	);
});
