import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { Link } from 'react-router-dom';
import styles from './styles.css';

export default compose(setDisplayName('Navbar'))(({ links }) => (
	<ul className={styles.navList}>
		{links.map((link, id) => {
			return (
				<li key={id}>
					<Link to={link.toLowerCase() === 'home' ? '/' : link.toLowerCase()}>
						{link}
					</Link>
				</li>
			);
		})}
	</ul>
));
