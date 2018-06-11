import React from 'react';
import { compose, setDisplayName } from 'recompose';
import { pluck } from 'ramda';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';

export default compose(setDisplayName('Router'))(({ rootComponent, components }) => {
	const linkNames = [rootComponent.displayName].concat(
		pluck('displayName')(components)
	);

	return (
		<Router>
			<div>
				<Navbar links={linkNames} />
				<Route exact path="/" component={rootComponent} />
				{components.map((component, id) => (
					<Route
						key={id}
						path={`/${component.displayName.toLowerCase()}`}
						component={component}
					/>
				))}
			</div>
		</Router>
	);
});
