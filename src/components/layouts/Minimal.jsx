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
		<NavRouter
			structure={[
				{
					label: 'home',
					component: Home,
					root: true,
				},
				{
					label: 'Projects',
					component: Projects,
					path: 'something',
				},
				{
					label: 'about',
					component: About,
				},
				{
					label: 'themes, yo!',
					subMenu: [
						{
							label: 'theme one',
							path: 'the-themes',
							component: Themes,
						},
						{
							label: 'theme two',
							path: 'second-theme',
							component: About,
						},
						{
							label: 'third',
							component: Themes,
						},
					],
				},
			]}
		/>
	</div>
));
