// Dependencies

import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//Components
import App from '../components/App.js';
import About from '../components/About/index.about.js';
import Home from '../components/Home/index.home.js';
import Page404 from '../components/Page404/index.page404.js';


const AppRoutes = ()=>
		<App>
			<Switch>
				<Route path="/about" component={About} />
				<Route exact path="/" component={Home} />
				<Route component={Page404} />
			</Switch>
	</App>;


/*
class AppRoutes extends Component {
	render(){
		return(
			<App>
				<Switch>
					<Route path="/about" component={About}/>
					<Route path="/" component={Home}/>
					<Route component={Page404}/>
				</Switch>
			</App>
		);
	}
}*/

export default AppRoutes;