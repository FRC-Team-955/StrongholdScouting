'use strict';

import React from 'react';
import Snackbar from 'material-ui/lib/snackbar';
import FlatButton from 'material-ui/lib/flat-button';

require('styles//SuccessfulSaveComponent.css');

const SuccessfulSaveComponent = React.createClass({
	getInitialState: function(){
		return{
			open: false
		}
	},
	
	handleOpen: function(){
		this.setState({open: true});
	},
	
	handleClose: function(){
		this.setState({open: false});
	},
	
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
});

export default SuccessfulSaveComponent;
