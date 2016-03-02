import React from 'react';
import Paper from 'material-ui/lib/paper';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import TextField from 'material-ui/lib/text-field';

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

const teamList = [955, 5, 34, 24];

const teams = (
	<Card>
		<CardHeader title = {teamList[0]} actAsExpander={true} showExpandableButton={true} style = {style.teamCard}/>
		<CardMedia expandable = {true}>
			<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
		</CardMedia>
		<CardActions expandable={true}>
      		<TextField floatingLabelText = "Reason for Pick" rowsMax = {10} multiline = {true} style = {style.teamText}/>
    	</CardActions>
	</Card>
)

const Team = React.createClass ({
	getInitialState: function(){
		return{
			reason: "" // Should be subtitle
		}
	},
	render(){
		return(
			<Card>
				<CardHeader title = "955" subtitle = {this.state.reason} actAsExpander={true} showExpandableButton={true} style = {style.teamCard}/>
				<CardMedia expandable = {true}>
					<img src = "http://www.coolwallpapers.org/photo/42181/animal-hd-collection_duck.jpg"/>
				</CardMedia>
				<CardActions expandable={true}>
    		  		<TextField value = {this.state.reason} hintText = "Reason for Pick" rowsMax = {10} multiline = {true} style = {style.teamText}/>
    			</CardActions>
			</Card>
		)
	}
})

export default Team;