import React from 'react';
import { compose, setDisplayName, withProps } from 'recompose';
import { map, prop, flatten, has, filter, find, concat } from 'ramda';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

export default compose(
	withProps(({ structure }) => ({
		navItems: map(item => item, structure),
		getComponentsToRoute: () => {
			const isNotRoot = o => !has('root')(o);
			const isNotSubMenu = o => !has('subMenu', o);
			const subComps = map(
				x => x.subMenu,
				filter(x => has('subMenu', x), structure)
			);
			const components = flatten(
				concat(filter(isNotSubMenu, filter(isNotRoot, structure)), subComps)
			);
			return components;
		},
		rootComponent: prop('component')(find(x => has('root')(x) && x.root)(structure)),
	})),
	setDisplayName('Router')
)(({ structure, navItems, getComponentsToRoute, rootComponent }) => {
	return (
		<Router>
			<div>
				<Navbar items={navItems} />
				<Route exact path="/" component={rootComponent} />
				{getComponentsToRoute().map((item, id) => (
					<Route
						key={id}
						path={`/${item.path || item.component.displayName.toLowerCase()}`}
						component={item.component}
					/>
				))}
			</div>
		</Router>
	);
});
