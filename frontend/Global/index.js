// Dependencies
import React from 'react';
import { render } from 'react-dom';
import {
  Router,
  Route,
  Link
} from 'react-router-dom';
import {createBrowserHistory} from 'history'

// Routes 
import AppRoutes from './routes';
import './css/index.css';

class Main extends React.Component {

	render() {
		const history = createBrowserHistory();
		return (
			<Router history={history}>
				<AppRoutes/>
			</Router>
		);
	}
}

var domContainer = document.getElementById('app');
render(<Main/>,domContainer);


/*
render(
	<Router>
		<AppRoutes/>
	</Router>,
	document.getElementById('app')
);*/