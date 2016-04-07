'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import Colors from 'material-ui/lib/styles/colors';
import TextField from 'material-ui/lib/text-field';
import ScoreUnitComponent from './ScoreUnitComponent';
import TeleopActions from '../../actions/scoring/TeleopActions';

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

function scoring(values,increments,decrements,currentMatch,currentTeam){
	console.log(currentTeam);
    return (
		<div>
        <ScoreUnitComponent
			floatingLabelText="High Goal"
			value = {values[0]}
			increment = {increments[0]}
			decrement = {decrements[0]}
			currentMatch = {currentMatch}
			currentTeam = {currentTeam}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="High Failed"
			value = {values[1]}
			increment = {increments[1]}
			decrement = {decrements[1]}
			currentMatch = {currentMatch}
			currentTeam = {currentTeam}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Goal"
			value = {values[2]}
			increment = {increments[2]}
			decrement = {decrements[2]}
			currentMatch = {currentMatch}
			currentTeam = {currentTeam}
		/>
		
        <ScoreUnitComponent
			floatingLabelText="Low Failed"
			value = {values[3]}
			increment = {increments[3]}
			decrement = {decrements[3]}
			currentMatch = {currentMatch}
			currentTeam = {currentTeam}
		/>
		
    </div>)
}

const TeleopComponent = React.createClass({
	
	scoring: function(values,increments,decrements,currentMatch,currentTeam){
		console.log(currentTeam);
		this.forceUpdate();
		return (
			<div>
			<ScoreUnitComponent
				floatingLabelText="High Goal"
				value = {values[0]}
				increment = {increments[0]}
				decrement = {decrements[0]}
				currentMatch = {currentMatch}
				currentTeam = {currentTeam}
			/>
			
			<ScoreUnitComponent
				floatingLabelText="High Failed"
				value = {values[1]}
				increment = {increments[1]}
				decrement = {decrements[1]}
				currentMatch = {currentMatch}
				currentTeam = {currentTeam}
			/>
			
			<ScoreUnitComponent
				floatingLabelText="Low Goal"
				value = {values[2]}
				increment = {increments[2]}
				decrement = {decrements[2]}
				currentMatch = {currentMatch}
				currentTeam = {currentTeam}
			/>
			
			<ScoreUnitComponent
				floatingLabelText="Low Failed"
				value = {values[3]}
				increment = {increments[3]}
				decrement = {decrements[3]}
				currentMatch = {currentMatch}
				currentTeam = {currentTeam}
			/>
			
		</div>)
	},
	
    render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper 
					children = {scoring(
					[
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.highGoal.successes,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.highGoal.attempted,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.lowGoal.successes,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.lowGoal.attempted
					],
					[
						TeleopActions.updateIncrementHighGoalsMade,
						TeleopActions.updateIncrementHighGoalsAttempted,
						TeleopActions.updateIncrementLowGoalsMade,
						TeleopActions.updateIncrementLowGoalsAttempted
					],
					[
						TeleopActions.updateDecrementHighGoalsMade,
						TeleopActions.updateDecrementHighGoalsAttempted,
						TeleopActions.updateDecrementLowGoalsMade,
						TeleopActions.updateDecrementLowGoalsAttempted
					],
					
					this.props.matchData.currentMatch,
					this.props.matchData.currentTeam
					
					)} 
				
					style = {scoringContainer}/>
			</div>
		)
	}
})

export default TeleopComponent;
