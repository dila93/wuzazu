//Dependencies 
import React, { Component } from 'react';
import combinations from '../../data/combinations.js';

class Round extends Component {
	constructor(props) {
		super(props);
		this.state = {
			round: 1,
			valueSelected: 'Ok',
			nPlayer: 0,
			players: [],
			playerOneAnswer: [],
			playerTwoAnswer: [],    
			items: [
				{
					name: "Piedra",
					value: 0,
					lose: [0],
					win: [2]
				},
				{
					name: "Papel",
					value: 1,
					lose: [1],
					win: [0]
				},
				{
					name: "Tijera",
					value: 2,
					lose: [2],
					win: [1]
				}
			],
			combinations: combinations,
			combination: [],
			selection: null,
			message: null
		};
	}

	componentDidMount() {
		var me = this.state;

	}

	handleChange(key, event){
		var obj={};
		obj[key]= event.target.value;
		this.setState(obj);

		if(event.target.value == 1){
			this.setState({
				winner: null
			})
		}
	}

	startGame(){
		this.props.startGame(0);
	}

	setSelection(selection){

		/*
		const hey2 = me.combinations.filter(comb => comb.number == 2)
		 */
				
		var me = this.state;
		this.setState(prevState=>({
			selection: selection,
		}));
	}

	chooseWinner(playerOneAnswer, playerTwoAnswer){
		var me = this.state;
		const filteredOne = me.combinations.filter(comb => JSON.stringify(comb.mix) === JSON.stringify(playerOneAnswer))
		const filteredOneAnsw = filteredOne.slice();
		const filteredTwo = me.combinations.filter(comb => JSON.stringify(comb.mix) === JSON.stringify(playerTwoAnswer))
		const filteredTwoAnsw = filteredTwo.slice();
		/*return ({
			winner: 
		})*/

	}

	nextTurnRound(){
		var me = this.state;
		if(me.selection){
			if(me.nPlayer==0){
				this.setState(prevState=>({
					nPlayer: me.nPlayer+1,
					selection: null,
					playerOneAnswer: [...prevState.playerOneAnswer, me.selection],
					message: null
				}))
			}
			if(me.nPlayer==1){

				this.setState(prevState=>({
					nPlayer: 0,
					selection: null,
					playerTwoAnswer: [...prevState.playerTwoAnswer, me.selection],
					combination: [...prevState.combination, me.selection],
					round: me.round+1,
					winner: this.chooseWinner([...prevState.playerOneAnswer], [...prevState.playerTwoAnswer, me.selection]),
					message: null
				}))
			}
		}else{
			this.setState({
				message: 'Select an option'
			})
		}
	}

	infoRound(){
		var me = this.state;

		if(me.round>3){			
			return(
				<div>
					<div>Winner {me.winner}</div>
					<div onClick={this.handleChange.bind(this, 'round', {target:{value: 1}})}>Play again</div>
					<div onClick={this.startGame.bind(this)}>Change Nicks and Play again</div>
				</div>
			);
		}else{
			return(
				<div>
					<div>
						Round {me.round}
					</div>
					<div>
						{this.props.players[me.nPlayer]}
					</div>			
					<div>
						<p>Select move: </p>
						{me.items.map((item, index) => {
		    				return(
		    					me.selection==item.name?
		    						<div key={index}>{item.name} Selected</div>
			    					:<div key={index} onClick={this.setSelection.bind(this, item.name)}>
			    						{item.name} 
			    					</div>
		    				);
		    			})}
						
					</div>
					<input 
						type="button" 
						value={me.valueSelected}
						onClick={this.nextTurnRound.bind(this)}/>
					<div>
						{me.message}
					</div>
				</div>
			);
		}
	}

	selectView(){
		var me = this.state;

		return(
			<div>
				{this.infoRound()}
			</div>
		);
	}

	render(){
		var me = this.state;
		return(
			<div>
				{this.selectView()}
			</div>
			
		);
	}
}

export default Round;