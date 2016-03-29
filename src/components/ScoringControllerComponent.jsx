'use strict';

import React from 'react';
import NavbarComponent from './NavbarComponent';
import ScoresStore from '../stores/match/ScoringStore';
import MatchStore from '../stores/match/MatchStore';
import ScoringMainComponent from './scoring/ScoringMainComponent';

require('styles//ScoringController.css');

function getStores(){
	return {scoresData : ScoresStore.getScoresData(),matchData : MatchStore.getData()};
}

var ScoringControllerComponent = React.createClass({
	getInitialState : function(){
		return getScores()
	},
	
	componentDidMount: function() {
    	ScoresStore.addChangeListener(this._onChange);
		MatchStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function() {
    	ScoresStore.removeChangeListener(this._onChange);
		MatchStore.removeChangeListener(this._onChange);
  	},
	 
	_onChange: function() {
		this.setState(getStores());
		console.log(JSON.stringify(this.state.scoresData));
  	},
	  
  	render() {
    	return (
      	<ScoringMainComponent scoringData = {this.state.scoresData} matchData = {this.state.matchData}/>
    	);
  	}
});

export default ScoringControllerComponent;
