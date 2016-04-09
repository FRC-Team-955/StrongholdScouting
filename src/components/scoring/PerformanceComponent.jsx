'use strict';

import React from 'react';
import Slider from 'material-ui/lib/slider';
import Paper from 'material-ui/lib/paper';
import PerformanceActions from '../../actions/scoring/PerformanceActions';

require('styles//scoring/Performance.css');

const performance = (
    <Slider  description = "Performance" step = {0.5}/>
)

const offense = (
    <Slider description = "Offense" step = {0.5}/>
)

const defense = (
    <Slider description = "Defense" step = {0.5}/>
)

const ratingContainer = {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    height: 85
}


const PerformanceComponent = React.createClass({
	updatePerformanceValue: function(event,value){
		PerformanceActions.updatePerformance(value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	updateOffenseValue: function(event,value){
		PerformanceActions.updateOffense(value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	updateDefenseValue: function(event,value){
		console.log(value);
		PerformanceActions.updateDefense(value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	getValue: function(value){
		if(value === "good")
			return 1
		
		else if(value ==="meh")
			return .5
		
		else 
			return 0
	},
	
	render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper style = {ratingContainer} children = {<Slider  description = "Performance" step = {0.5} onChange = {this.updatePerformanceValue}  value = {this.getValue(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].performanceRating)}/>}/>
				<Paper style = {ratingContainer} children = {<Slider description = "Offense" step = {0.5} onChange = {this.updateOffenseValue} value = {this.getValue(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].offenseRating)}/>}/>
				<Paper style = {ratingContainer} children = {<Slider description = "Defense" step = {0.5} onChange = {this.updateDefenseValue} value = {this.getValue(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].defenseRating)}/>}/>
			</div>
		)
	}
});

export default PerformanceComponent;