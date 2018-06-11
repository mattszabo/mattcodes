import React from 'react';
import { compose, setDisplayName } from 'recompose';
import {
	map,
	values,
	path,
	prop,
	pluck,
	pick,
	forEach,
	flatten,
	isNil,
	has,
	filter,
	compose as composeR,
	find,
	not,
} from 'ramda';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

export default compose(setDisplayName('Router'))(({ structure }) => {
	// const linkNames = [rootComponent.displayName].concat(
	// 	pluck('displayName')(pick('')(components))
	// );

	const getLabel = prop('label');
	const getComponent = prop('component');
	const getPath = prop('path');

	const linksList = map(
		o => (has('path', o) ? { label: getLabel(o), path: getPath(o) } : getLabel(o)),
		structure
	);
	console.log('la', linksList);
	const isRoot = o => has('root')(o) && o.root;
	const isNotRoot = o => !has('root')(o);
	const components = filter(isNotRoot, structure);

	const rootComponent = getComponent(find(isRoot, structure));
	// const rootComponent = filter(isRoot, structure);
	// console.log('r', rootComponent);

	return (
		<Router>
			<div>
				<Navbar links={linksList} />
				<Route exact path="/" component={rootComponent} />
				{components.map((o, id) => {
					console.log(o.path);
					const path = o.path || o.component.displayName.toLowerCase();
					console.log('p', path);
					return (
						<Route
							key={id}
							path={`/${o.path || o.component.displayName.toLowerCase()}`}
							component={o.component}
						/>
					);
				})}
			</div>
		</Router>
	);
});
