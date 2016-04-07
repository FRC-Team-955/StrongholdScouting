'use strict';

import React from 'react';
import ScoresStore from '../stores/scoring/ScoresStore';
import MatchStore from '../stores/match/MatchStore';
import ScoringMainComponent from './scoring/ScoringMainComponent';

require('styles//ScoringController.css');

function getStores(){
	return {matchData : MatchStore.getData(), scoringData : ScoresStore.getScoresData()};
}

var ScoringControllerComponent = React.createClass({
	getInitialState : function(){
		return getStores()
	},
	
	componentDidMount: function() {
		MatchStore.addChangeListener(this._onChange);
    	ScoresStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function() {
		MatchStore.removeChangeListener(this._onChange);
    	ScoresStore.removeChangeListener(this._onChange);
  	},
	 
	_onChange: function() {
		this.setState(getStores());
		// console.log(JSON.stringify(this.state.scoresData));
  	},
	  
  	render() {
    	return (
      		<ScoringMainComponent matchData = {this.state.matchData} scoringData = {this.state.scoringData}/>
    	);
  	}
});

export default ScoringControllerComponent;
