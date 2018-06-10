import React from 'react';
import { compose, setDisplayName } from 'recompose';
import NavRouter from '../nav/NavRouter';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import styles from './minimal.css';

console.log(styles);

export default compose(setDisplayName('Minimal'))(() => (
	<div className={styles.content}>
		<NavRouter rootComponent={Home} components={[Projects, About]} />
	</div>
));
