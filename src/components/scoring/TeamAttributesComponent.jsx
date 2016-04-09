'use strict'

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox';
import TeamAttributesActions from '../../actions/scoring/TeamAttributesActions';

require('styles//scoring/TeamAttributes.css');

const style = {
    container: {
        width: "100%",
        height: 254
    },
    boxContainer: {
        padding: 0
    },
    box: {
        marginTop: 50,
        paddingLeft: 5
    }
}

const toggle = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Auto" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Challenge" style = {style.box}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Spy" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Human Player" style = {style.box}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Vision" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Broken" style = {style.box}/>
            </div>
        </div>
    </div>
)

const TeamAttributesComponent = React.createClass({
	onAutoTap: function(){
		TeamAttributesActions.updateAuto(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	onChallengeTap: function(){
		TeamAttributesActions.updateChallenge(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	onSpyTap: function(){
		TeamAttributesActions.updateSpy(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	onHumanPlayerTap: function(){
		TeamAttributesActions.updateHumanPlayer(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	onVisionTap: function(){
		TeamAttributesActions.updateVision(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	onBrokenTap: function(){
		TeamAttributesActions.updateBroken(this.props.matchData.currentTeam,this.props.matchData.currentMatch);
	},
	
	getToggles: function(){
		return(
			<div className = "container-fluid">
				<div className = "row">
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Auto" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].performedAuto} onTouchTap = {this.onAutoTap}/>
					</div>
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Challenge" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].challenge} onTouchTap = {this.onChallengeTap}/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Spy" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].spy} onTouchTap = {this.onSpyTap}/>
					</div>
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Human Player" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].humanPlayer} onTouchTap = {this.onHumanPlayerTap}/>
					</div>
				</div>
				<div className = "row">
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Vision" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].vision} onTouchTap = {this.onVisionTap}/>
					</div>
					<div className = "col-md-6" style = {style.boxContainer}>
						<Checkbox label = "Broken" style = {style.box} checked = {this.props.scoringData[this.props.matchData.currentTeam].matches[this.props.matchData.currentMatch].broken} onTouchTap = {this.onBrokenTap}/>
					</div>
				</div>
			</div>
		)
	},
	
	render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper style = {style.container} children = {this.getToggles()}/>
			</div>
		)
	}
})

export default TeamAttributesComponent;