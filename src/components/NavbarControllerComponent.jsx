'use strict';

import React from 'react';
import NavbarComponent from './NavbarComponent';
import MatchStore from '../stores/match/MatchStore';

require('styles//NavbarController.css');

function getMatchStore(){
	return {matchData : MatchStore.getMatchStore};
}

var NavbarControllerComponent = React.createClass({
	getInitialState : function(){
		return getMatchStore();
	},
	
	componentDidMount: function() {
    	MatchStore.addChangeListener(this._onChange);
  	},

  	componentWillUnmount: function() {
    	MatchStore.removeChangeListener(this._onChange);
  	},
	 
	_onChange: function() {
    	this.setState(getMatchStore());
		console.log(JSON.stringify(this.state.matchData));
  	},
	  
  	render() {
    	return (
      	<NavbarComponent/>
    	);
  	}
});

export default NavbarControllerComponent;
