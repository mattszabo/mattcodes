import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown/Dropdown';
import styles from './styles.css';

export default compose(setDisplayName('Navbar'))(({ links }) => (
	<ul className={styles.navList}>
		{links.map((link, id) => {
			let to = '';
			let label = '';
			if (typeof link === 'object') {
				to = link.path;
				label = link.label;
			} else {
				to = link.toLowerCase() === 'home' ? '/' : link.toLowerCase();
				label = link;
			}
			return (
				<li key={id}>
					<Link to={to}>{label}</Link>
				</li>
			);
		})}
		<Dropdown />
	</ul>
));
