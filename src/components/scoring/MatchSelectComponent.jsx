'use strict';

import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MatchStore from '../../stores/match/MatchStore';

require('styles//scoring/MatchSelect.css');

var alt = require('../../components/Dispatcher');

const selectStyle = {
    width: "100%",
}

const MatchList = [];

class MatchSelectComponent extends React.Component{
	constructor(props){
		super(props);
		this.change = this.change.bind(this);
		this.getMatchList = this.getMatchList.bind(this);
		this.state = {
			value: 1,
			matchData : ""
		}
	} 
   
	change(event, index, value) {
		this.setState({value})
	}
	
	getMatchList(){
		//this.state.matchData = MatchStore.getMatchData();
		//log(JSON.stringify(this.state.matchData) + " component");
		//console.log(JSON.stringify(MatchStore.getMatchData()) + " store");
		matchStuff = alt.createStore(MatchStore, "MatchStore");
		console.log(matchStuff.getMatchData + "\tfinal");
		//for(var i = 1; i <= this.state.matchData.totalMatchNumber; i++){
		//	MatchList.push(<MenuItem primaryText = {"#" + i} value = {i}/>)
		//}
	}
   
	render(){
		return(
			<SelectField style = {selectStyle} onTouchTap = {this.getMatchList} value = {this.state.value} onChange = {this.change}>{MatchList}</SelectField>
		)
	}
};

export default MatchSelectComponent;
