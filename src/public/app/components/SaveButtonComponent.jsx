import React from 'react';
import Tab from 'material-ui/lib/tabs/tab';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import SuccessfulSave from './SuccessfulSaveComponent';

const tab = {
	width: 0,
	paddingLeft: 50
}

const button = {
	width: 200
}


const Save = React.createClass ({
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
    	    onTouchTap={this.handleClose}
    	  />,
    	];
    	return (
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
})

export default Save;