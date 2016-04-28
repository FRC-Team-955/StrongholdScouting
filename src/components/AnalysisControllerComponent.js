'use strict';

import React from 'react';
import ScoresStore from '../stores/scoring/ScoresStore';
import TeamListComponent from './analysis/TeamListComponent';

require('styles//ScoringController.css');

function getStore(){
	return {scoringData : ScoresStore.getScoresData()};
}

var AnalysisControllerComponent = React.createClass({
	getInitialState : function(){
		return getStore()
	},
	
	componentDidMount: function() {
    	ScoresStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function() {
    	ScoresStore.removeChangeListener(this._onChange);
  	},
	 
	_onChange: function() {
		this.setState(getStore());
		// console.log(JSON.stringify(this.state.scoresData));
  	},
	  
	getTeamList: function(){
		var teams = [];
		for(var team in this.state.scoringData){
			teams.push(team);
			console.log(teams);
		}
	},
	  
  	render() {
    	return (
      		<TeamListComponent scoringData = {this.state.scoringData} needsUpdate = {this.state.scoringData.needsUpdate}/>
    	);
  	}
});

export default AnalysisControllerComponent;
