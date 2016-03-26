'use strict';

import React from 'react';
import NavbarComponent from './NavbarComponent';
import ScoresStore from '../stores/match/ScoringStore';
import ScoringMainComponent from './scoring/ScoringMainComponent';

require('styles//ScoringController.css');

function getScoresStore(){
	return {scoresData : ScoresStore.getScoresData()};
}

var ScoringControllerComponent = React.createClass({
	getInitialState : function(){
		return getScoresStore();
	},
	
	componentDidMount: function() {
    	ScoresStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function() {
    	ScoresStore.removeChangeListener(this._onChange);
  	},
	 
	_onChange: function() {
    	this.setState(getScoresStore());
		console.log(JSON.stringify(this.state.scoresData));
  	},
	  
  	render() {
    	return (
      	<ScoringMainComponent scoringData = {this.state.scoresData}/>
    	);
  	}
});

export default ScoringControllerComponent;
