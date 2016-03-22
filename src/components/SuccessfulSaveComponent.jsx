'use strict';

import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import FlatButton from 'material-ui/lib/flat-button';

require('styles//SuccessfulSaveComponent.css');

class SuccessfulSaveComponent extends React.Component{
	constructor(props){
		super(props);
		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
		this.state = {
			open: false
		}
	}
	
	handleOpen() {
		this.setState({open: true});
	}
	
	handleClose() {
		this.setState({open: false});
	}
	
	render() {
		return(
			<div>
        		<Snackbar
        		  open={this.state.open}
        		  message="Match Saved"
        		  autoHideDuration={4000}
        		  onRequestClose={this.handleClose}
        		/>
      	</div>
		)
	}
};

export default SuccessfulSaveComponent;
