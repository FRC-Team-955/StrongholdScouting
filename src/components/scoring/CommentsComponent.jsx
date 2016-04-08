'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';
import CommentsActions from '../../actions/scoring/CommentsActions';

require('styles//scoring/Comments.css');

const teamContainer = {
    width: "100%",
    height: 127,
    paddingLeft: 10
}

const teamTextStyle = {
    width: "90%",
    margin: 0
}

const matchContainer = {
    width: "100%",
    height: 127,
    padding: 10
}

const matchTextStyle = {
    width: "90%",
    margin: 0
}

const teamText = (
    <TextField floatingLabelText = "Team Comments" rows = {9} rowsMax = {9} style = {teamTextStyle} multiLine = {true}/>
)

const matchText = (
    <TextField floatingLabelText = "Match Comments" rows = {9} rowsMax = {9} style = {matchTextStyle} multiLine = {true}/>
)

const CommentsComponent = React.createClass({
	handleTeamChange(event){
    	CommentsActions.updateTeamComments(event.target.value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	handleMatchChange(event){
    	CommentsActions.updateMatchComments(event.target.value,this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	render(){
		return(<div className = "col-md-3 spacing">
			<Paper children = {<TextField floatingLabelText = "Team Comments" rows = {9} rowsMax = {9} style = {teamTextStyle} multiLine = {true} onChange = {this.handleTeamChange} value = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].teamComments}/>} style = {teamContainer}/>
			<Paper children = {<TextField floatingLabelText = "Match Comments" rows = {9} rowsMax = {9} style = {matchTextStyle} multiLine = {true} onChange = {this.handleMatchChange} value = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].matchComments}/>} style = {matchContainer}/>
		</div>
		)
	}
})

export default CommentsComponent;
