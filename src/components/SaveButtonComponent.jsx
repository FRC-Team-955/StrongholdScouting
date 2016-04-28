'use strict';

import React from 'react';
import Tab from 'material-ui/lib/tabs/tab';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import SuccessfulSaveComponent from './SuccessfulSaveComponent';
import SaveButtonActions from '../actions/scoring/SaveButtonActions';

require('styles//SaveButton.css');

const tab = {
	width: 0,
	paddingLeft: 50
}

const button = {
	width: 200
}

const SaveButtonComponent = React.createClass({
	getInitialState: function(){
		return {
			open: false,
		}
	},
	handleOpen: function(){
		this.setState({open: true});
	},
	handleClose: function(){
		this.setState({open: false});
	},
	
	save: function(){
		var teams = [];
		if(this.props.isBlue){
			for(var i = 1; i <= 3; i++){
				teams.push(this.props.matchData[this.props.matchData.currentMatch+"b"+i]);
			}
		}
		
		else{
			for(var i = 1; i <= 3; i++){
				teams.push(this.props.matchData[this.props.matchData.currentMatch+"r"+i]);
			}	
		}
		
		SaveButtonActions.updateMatchSave();
		SaveButtonActions.updateScoringSave();
		SaveButtonActions.updateTotalMatches(teams);
		this.setState({open: false});
	},
	
	load: function(){
		SaveButtonActions.updateMatchData();
		SaveButtonActions.updateScoringData();
		this.setState({open: false});
	},
	
	render() {
    	const actions = [
    	  <FlatButton
    	    label="Cancel"
    	    secondary={true}
    	    onTouchTap={this.handleClose}
    	  />,
    	  <FlatButton
    	    label="Save"
    	    primary={true}
    	    keyboardFocused={true}
    	    onTouchTap={this.save}
    	  />,
		  <FlatButton
    	    label="Load"
    	    secondary={true}
    	    keyboardFocused={true}
    	    onTouchTap={this.load}
    	  />,
    	];
    	return(
    	  <Tab label={<div style = {tab} onClick = {this.handleOpen}>Save 
    	    <Dialog
    	      title="Save?"
    	      actions={actions}
    	      modal={false}
    	      open={this.state.open}
    	      onRequestClose={this.handleClose} 
    	    >
    	      
    	    </Dialog>
    	  </div>} onTouchTap = {this.handleOpen} style = {button}/>
		  
		);
 	}	
});

export default SaveButtonComponent;
