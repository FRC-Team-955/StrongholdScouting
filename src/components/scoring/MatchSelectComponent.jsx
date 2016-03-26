'use strict';

import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MatchActions from '../../actions/match/MatchActions'

require('styles//scoring/MatchSelect.css');

const selectStyle = {
    width: "100%",
}

var match = [];

const MatchSelectComponent = React.createClass({
	getInitialState: function(){
		return{
			value: 1,
			prevMatchLength: 0
		}
	},
	
	updateList: function(){
		for(var i = this.state.prevMatchLength; i < this.props.matches; i++){
			match.push(<MenuItem primaryText = {'#' + (i+1)} value = {i+1}/>)
		}
		
		this.setState({prevMatchLength:this.props.matches}); 
	},
   
	change: function(event, index, value) {
		this.setState({value})
		MatchActions.updateCurrentMatch(value);
		console.log(value +" value");
	},
   
	render(){
		return(
			<SelectField onTouchTap = {this.updateList} style = {selectStyle} value = {this.state.value} onChange = {this.change}>{match}</SelectField>
		)
	}
});

export default MatchSelectComponent;
