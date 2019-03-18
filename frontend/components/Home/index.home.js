//Dependencies 
import React, { Component } from 'react';
import Rounds from './rounds.home.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOne: null,
			playerTwo: null,
			default: {
				playerOne: 'Player 1',
				playerTwo: 'Player 2'
			},
			gameView: 0
		};
	}

	componentDidMount() {
		var me = this.state;

	}

	handleChange(key, event){
		var obj={};
		obj[key]= event.target.value;
		this.setState(obj);
	}



	startGame(nView){
		var me = this.state;
		this.setState({
			gameView: nView
		});

		if(nView == 0){
			this.setState({
				playerOne: null,
				playerTwo: null
			})
		}
	}

	selectView(){
		var me = this.state;
		if(me.gameView==1){
			return(
				<div>
					<Rounds 
						players={[me.playerOne, me.playerTwo]}
						startGame={this.startGame.bind(this)}/>
				</div>
			);
		}else if (me.gameView == 0){
			return(
				<div className="intro-container">			
						<div className="title-name">
							Enter Player's Names
						</div>
						<form onSubmit={this.startGame.bind(this, 1)}>
							<div className="input-names">
								<div>
									<p>{me.playerOne?me.playerOne:me.default.playerOne}</p>
									<p>The nick must be valid, please put letters first without spaces</p>
									<input
										placeholder="Nick of PLayer 1"
										pattern='^[^0-9]\w+$'
										type="text" 
										onChange={this.handleChange.bind(this, 'playerOne')}
										required></input>
								</div>
								<div>
									<p>{me.playerTwo?me.playerTwo:me.default.playerTwo}</p>
									<p>The nick must be valid, please put letters first without spaces</p>
									<input
										placeholder="Nick of PLayer 2"
										pattern='^[^0-9]\w+$'
										type="text" 
										onChange={this.handleChange.bind(this, 'playerTwo')}
										required></input>
								</div>
							</div>
							<input type="submit" value="Start"/>
						</form>						
				</div>
			);
		}
	}

	render(){
		var me = this.state;
		return(
			<div className="home-container">
				{this.selectView()}
			</div>
			
		);
	}
}

export default Home;