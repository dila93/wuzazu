	// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Content from './Content/index.content.js';

// Data
import items from '../data/menu';

class App extends Component {
	render(){
		const { children } = this.props;
		return(
			<div>
				<Content body={children}/>
			</div>

		);

	}
}

App.propTypes = {
	children: PropTypes.object.isRequired,
};

export default App;