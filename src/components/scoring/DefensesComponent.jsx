'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'; 
import TextField from 'material-ui/lib/text-field';
import DefensesUnitComponent from './DefensesUnitComponent';
import DefensesActions from '../../actions/scoring/DefensesActions';

require('styles//scoring/Defenses.css');

const defenseContainer = {
    width: "100%",
    height: 300,
    paddingTop: 10,
    marginLeft: 0
}

const defenseStyle = {
    height: 90,
	//marginTop: 5
}

const topDefense = {
    //marginTop: 20
}

const totalStyle = {
    padding: 15,
    fontSize: 14
}

const totalText = {
    fontSize: 25,
    width: "100%"
}

const buttonStyle = {
	width: "50%"
}


const defenseButtons = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B1"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C2"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "E1"/>}/>
            </div>
        </div>
    </div>
)

const DefensesComponent = React.createClass({
	getDefenseButtons: function(value,increments,decrements){
		return(
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A1" value = {value[0]} increment = {increments[0]} decrement = {decrements[0]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A2" value = {value[1]} increment = {increments[1]} decrement = {decrements[1]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B1" value = {value[2]} increment = {increments[2]} decrement = {decrements[2]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B2" value = {value[3]} increment = {increments[3]} decrement = {decrements[3]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C1" value = {value[4]} increment = {increments[4]} decrement = {decrements[4]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C2" value = {value[5]} increment = {increments[5]} decrement = {decrements[5]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D1" value = {value[6]} increment = {increments[6]} decrement = {decrements[6]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D2" value = {value[7]} increment = {increments[7]} decrement = {decrements[7]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
					<div className = "col-md-4">
						<Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "E1" value = {value[8]} increment = {increments[8]} decrement = {decrements[8]} currentTeam = {this.props.matchData.currentTeam} currentMatch = {this.props.matchData.currentMatch}/>}/>
					</div>
				</div>
			</div>
		)
	},
	
	render(){
			return(<div className = "col-md-6 spacing">  
				<Paper style = {defenseContainer} children = {this.getDefenseButtons(
					[
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.portcullis,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.chevalDeFrise,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.rockWall,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.moat,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.drawbridge,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.sallyPort,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.roughTerrain,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.ramparts,
						this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teleop.defensesCrossed.lowBar
					],
					[
						DefensesActions.updateIncrementPortcullis,
						DefensesActions.updateIncrementChevalDeFrise,
						DefensesActions.updateIncrementRockWall,
						DefensesActions.updateIncrementMoat,
						DefensesActions.updateIncrementDrawbridge,
						DefensesActions.updateIncrementSallyPort,
						DefensesActions.updateIncrementRoughTerrain,
						DefensesActions.updateIncrementRamparts,
						DefensesActions.updateIncrementLowBar
					],
					[
						DefensesActions.updateDecrementPortcullis,
						DefensesActions.updateDecrementChevalDeFrise,
						DefensesActions.updateDecrementRockWall,
						DefensesActions.updateDecrementMoat,
						DefensesActions.updateDecrementDrawbridge,
						DefensesActions.updateDecrementSallyPort,
						DefensesActions.updateDecrementRoughTerrain,
						DefensesActions.updateDecrementRamparts,
						DefensesActions.updateDecrementLowBar
					]
				)}/>
			</div>)
	}
})

export default DefensesComponent;