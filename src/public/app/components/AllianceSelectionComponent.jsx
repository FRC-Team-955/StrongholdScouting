import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import TextField from 'material-ui/lib/text-field';
import Team from './AllianceSelectionTeamComponent';

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
	},
	teamCard: {
		height: 564/8
	},
	teamText: {
		width: "100%"
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
			<Paper style = {style.teams} zDepth = {3}/>
		</div>
		<div className = "col-md-8 spacing">
			<div className = "row">
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
			</div>
			<div className = "row" style = {style.bottom}>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
				<div className = "col-md-3">
					<Paper style = {style.alliances} zDepth = {2}/>
				</div>
			</div>
		</div>
		<div className = "col-md-2 spacing">
			<Paper style = {style.teams} zDepth = {3} children = {<Team/>}/>
		</div>
	</div>
)

export default AllianceSelection;


