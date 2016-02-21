import React from 'react';
import Paper from 'material-ui/lib/paper';
import AllianceSelectTeams from './AllianceSelectionTeamListComponent';

const style = {
	teams: {
		height: 575
	},
	alliances: {
		height: 564/2
	},
	bottom: {
		marginTop: 10
	},
	teamFont: {
		textAlign: "center",
		fontSize: 20,
		textDecoration: "underline"
	}
}

const allianceSelectTeams = (
	<div style = {style.teamFont}>
		Teams
	</div>
)

const AllianceSelection = () => (
	<div className = "row">
		<div className = "col-md-2 spacing">
			<Paper style = {style.teams} children = {allianceSelectTeams}/>
		</div>
		<div className = "col-md-8 spacing">
			<div className = "row">
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
			</div>
			<div className = "row" style = {style.bottom}>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances}/>
				</div>
			</div>
		</div>
		<div className = "col-md-2 spacing">
			<Paper style = {style.teams}/>
		</div>
	</div>
)

export default AllianceSelection;


