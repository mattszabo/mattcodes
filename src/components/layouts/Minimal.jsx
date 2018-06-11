import React from 'react';
import { compose, setDisplayName } from 'recompose';
import NavRouter from '../nav/NavRouter';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import About from '../about/About';
import Themes from '../themes/Themes';
import styles from './minimal.css';

export default compose(setDisplayName('Minimal'))(() => (
	<div className={styles.content}>
		{/* <NavRouter rootComponent={Home} components={[Projects, About, Themes]} /> */}
		<NavRouter
			structure={[
				{
					label: 'home',
					component: Home,
					root: true,
				},
				{
					label: 'projects',
					component: Projects,
					path: 'something',
				},
				{
					label: 'about',
					component: About,
				},
			]}
		/>
	</div>
));
