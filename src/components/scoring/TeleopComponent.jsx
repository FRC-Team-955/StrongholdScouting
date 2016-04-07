'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import Colors from 'material-ui/lib/styles/colors';
import TextField from 'material-ui/lib/text-field';
import ScoreUnitComponent from './ScoreUnitComponent';

require('styles//scoring/ScoringMain.css');

const scoringContainer = {
    width: "100%",
    //marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    height: 300
}

const highDiv = {
    width: "100%"
}
const leftStyleHigh = {
    width: 20,
    cssFloat: "left",
    marginLeft: 10
    
}

const textStyleHigh = {
    width: 50,
    marginLeft: 18,
    marginRight: 40
}

const rightStyleHigh = {
    width: 20
}

const leftStyleLow = {
    width: 20,
    cssFloat: "left",
    marginLeft: 10
    
}

const textStyleLow = {
    width: 50,
    marginLeft: 20,
    marginRight: 40
}

const rightStyleLow = {
    width: 20
}

const labelStyle = {
    width: 100
} 

function scoring(value){
    return (
		<div>
        <ScoreUnitComponent
			floatingLabelText="High Goal"
			value = {value[0]}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="High Failed"
			value = {value[1]}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Goal"
			value = {value[2]}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Failed"
			value = {value[3]}
		/>
		
    </div>)
}

const TeleopComponent = React.createClass({
    render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper 
					children = {scoring([
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.highGoal.successes,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.highGoal.attempted,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.lowGoal.successes,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.lowGoal.attempted
					])} 
				
					style = {scoringContainer}/>
			</div>
		)
	}
})

export default TeleopComponent;
