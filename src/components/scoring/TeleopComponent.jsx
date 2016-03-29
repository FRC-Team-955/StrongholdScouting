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

const scoring = (
    <div>
        <ScoreUnitComponent
			floatingLabelText="High Goal"
			value = {this.props.scoringData[this.props.currentTeam].matches[this.props.currentMatch].teleop.highGoal.successes}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="High Failed"
			value = {this.props.scoringData[this.props.currentTeam].matches[this.props.matchNum].teleop.highGoal.attempted}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Goal"
			value = {this.props.scoringData[this.props.currentTeam].matches[this.props.matchNum].teleop.lowGoal.successes}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Failed"
			value = {this.props.scoringData[this.props.currentTeam].matches[this.props.matchNum].teleop.lowGoals.attempted}
		/>
		
    </div>
)

const TeleopComponent = React.createClass({
    render(){
		<div className = "col-md-3 spacing">
			<Paper children = {scoring} style = {scoringContainer}/>
		</div>
	}
})

export default TeleopComponent;
