'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox'; 
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MatchAttributesActions from '../../actions/scoring/MatchAttributesActions';

require('styles//scoring/MatchAttributes.css');

const matchToggleContainer = {
    width: "100%",
    height: 127.5,
    padding: 10
}

const style = {
    match: {
        width: "100%"
    },
    text: {
        fontSize: 20
    },
	cap: {
		marginBottom: 30,
		fontSize: 20
	},
	scaleSelect: {
		width: 200
	}
}

const MatchAttributesComponent = React.createClass ({
   
   getInitialState: function(){
        return{
            value: false,
			checked: false,
			enable: true
        }
    }, 
   
   getToggles: function(){
	   return(
			<div>
			<div style = {style.match}>
				<Checkbox label = "Capture" style = {style.cap} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].capture} onTouchTap = {this.onCapTap}/>
			</div>
			<div style = {style.match}>
				<Checkbox label = "Breach" style = {style.text} checked ={this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].breach} onTouchTap = {this.onBreachTap}/>
			</div>
			</div>
		)
   },
   
   change: function(event, index, value) {
	   this.setState({value})
   },
   
   onScaleTap: function(){
	   MatchAttributesActions.updateScale(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
   },
   
   onBreachTap: function(){
	   MatchAttributesActions.updateBreach(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
   },
   
   onCapTap: function(){
	   MatchAttributesActions.updateCapture(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
   },
   
   disableToggle: function(){
	   this.setState({checked: !this.state.checked})
	   this.setState({enable: !this.state.enable})
   },
   
   setScaleHeight: function(event, index, value){
	   console.log(value);
	   MatchAttributesActions.updateScaleHeight(value,this.props.matchData.currentTeam,this.props.matchData.currentMatch)
   },
   
   getScaleHeight: function(){
		if(this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].scaledHigh)
			return true;
		
		else
			return false;
   },
   
	render(){
		return(
			<div className = "col-md-3 spacing">
        		<Paper style = {matchToggleContainer} children = {
					<div>
						<Checkbox label = "Scale Success?" onCheck = {this.disableToggle} onTouchTap = {this.onScaleTap} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].scaled}/>
							<SelectField style = {style.scaleSelect} value = {this.getScaleHeight()} onChange = {this.setScaleHeight} disabled = {!this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].scaled}>
       							<MenuItem value={true} primaryText="High"/>
        						<MenuItem value={false} primaryText="Low"/>
      						</SelectField>
					</div>
				}/>
				<Paper style = {matchToggleContainer} children = {this.getToggles()}/>
    		</div>
		)
	}
});

export default MatchAttributesComponent;