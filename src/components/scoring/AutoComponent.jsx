'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import ScoreUnitComponent from './ScoreUnitComponent';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import AutoActions from '../../actions/scoring/AutoActions';

require('styles//scoring/Auto.css');

const highDiv = {
    width: "100%",
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
    width: 20,
}

const labelStyle = {
    width: 100
}

const scoringContainer = {
    width: "100%",
    //marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    height: 300
}

const autoToggle = {
    margin: 10,
    fontSize: 15
}

const autoDrop = {
	marginLeft: 10
}

const autoScore = (
	<div>
		<ScoreUnitComponent
			floatingLabelText="Auto High"
		/>
			
		<ScoreUnitComponent
			floatingLabelText="Auto Low"
		/>
		
        <div>
           <Checkbox label = "Reach Defense" style = {autoToggle}/>
        </div>
    </div>
)

const AutoComponent = React.createClass ({
	getInitialState: function(){
        return{
            value: 1,
			checked: false,
			enable: true
        }
    }, 
   
   getAutoScore: function(values,increments,decrements){
	   return(
			<div>
				<ScoreUnitComponent
					floatingLabelText="Auto High"
					value = {values[0]}
					increment = {increments[0]}
					decrement = {decrements[0]}
					currentMatch = {this.props.matchData.currentMatch}
					currentTeam = {this.props.matchData.currentTeam}
				/>
					
				<ScoreUnitComponent
					floatingLabelText="Auto Low"
					value = {values[1]}
					increment = {increments[1]}
					decrement = {decrements[1]}
					currentMatch = {this.props.matchData.currentMatch}
					currentTeam = {this.props.matchData.currentTeam}
				/>
				
				<div>
					<Checkbox label = "Reach Defense" style = {autoToggle} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.reachedDefense} onTouchTap = {this.onReachTap}/>
				</div>
			</div>
	   )
   },
   
   onReachTap: function(){
	   AutoActions.updateReachDefense(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
   },
   
   crossDefense: function(event,index,value){
	   AutoActions.updateCrossDefense(value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	   console.log(value);
   },
   
   onCrossTap: function(){
	   AutoActions.updateCrossedDefense(this.props.matchData.currentTeam,this.props.matchData.currentMatch);	   
   },
   
   change: function(event, index, value) {
	   this.setState({value})
   },
   
	getSelectFieldValue: function(){
		if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.portcullis)
	   		return 1
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.chevalDeFrise)
			return 2
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.rockWall)
			return 3
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.moat)
			return 4
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.drawbridge)
			return 5
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.sallyPort)
			return 6
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.roughTerrain)
			return 7
		else if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.defensesCrossed.ramparts)
			return 8
		else
			return 9
	
   },
   
   disableToggle: function(){
	   if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.crossedDefense)
	   		this.setState({enable: true})
		else
			this.setState({enable: false})
   },
   
	render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper style = {scoringContainer} children = {
					<div>
						{this.getAutoScore(
							[
								this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.highGoal,
								this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.lowGoal
							],
							[
								AutoActions.updateIncrementHighGoals,
								AutoActions.updateIncrementLowGoals
							],
							[
								AutoActions.updateDecrementHighGoals,
								AutoActions.updateDecrementLowGoals
							]
						)}
						<Checkbox label = "Defense Crossed" checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.crossedDefense} onCheck = {this.disableToggle} style = {autoToggle} onTouchTap = {this.onCrossTap}/>
							<SelectField maxHeight = {75} style = {autoDrop} value = {this.getSelectFieldValue()} onChange = {this.crossDefense} disabled = {!this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].auto.crossedDefense}>
       							<MenuItem value={1} primaryText="A1"/>
        						<MenuItem value={2} primaryText="A2"/>
								<MenuItem value={3} primaryText="B1"/>
        						<MenuItem value={4} primaryText="B2"/>
								<MenuItem value={5} primaryText="C1"/>
        						<MenuItem value={6} primaryText="C2"/>
								<MenuItem value={7} primaryText="D1"/>
        						<MenuItem value={8} primaryText="D2"/>
								<MenuItem value={9} primaryText="E1"/>
      						</SelectField>
					</div>
				}/>
    		</div>
		)
	}
});

export default AutoComponent;