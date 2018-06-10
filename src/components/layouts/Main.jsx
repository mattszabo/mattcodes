import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { compose } from 'recompose';
import Navbar from '../nav/Navbar';
import Home from '../home/Home';
import About from '../about/About';
import Projects from '../projects/Projects';
import Footer from '../footer/Footer';

export default compose()(() => (
	<Router>
		<div>
			<Navbar />
			<hr />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<hr />
			<Footer />
		</div>
	</Router>
));
