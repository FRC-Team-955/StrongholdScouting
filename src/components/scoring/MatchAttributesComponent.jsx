'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox'; 
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

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

const toggle = (
    <div>
		<div style = {style.match}>
        	<Checkbox label = "Capture" style = {style.cap}/>
    	</div>
		<div style = {style.match}>
        	<Checkbox label = "Breach" style = {style.text}/>
    	</div>
	</div>
)

const MatchAttributesComponent = React.createClass({
    
	getInitialState: function(){
        return{
            value: false,
			checked: false,
			enable: true
        }
    }, 
   
   change: function(event, index, value) {
	   this.setState({value})
   },
   
   disableToggle: function(){
	   this.setState({checked:!this.state.checked})
	   this.setState({enable: !this.state.enable})
   },
   
	render(){
		return(
			<div className = "col-md-3 spacing">
        		<Paper style = {matchToggleContainer} children = {
					<div>
						<Checkbox label = "Scale Success?" checked = {this.state.checked} onCheck = {this.disableToggle}/>
							<SelectField style = {style.scaleSelect} value = {this.state.value} onChange = {this.change} disabled = {this.state.enable}>
       							<MenuItem value={true} primaryText="High"/>
        						<MenuItem value={false} primaryText="Low"/>
      						</SelectField>
					</div>
				}/>
				<Paper style = {matchToggleContainer} children = {toggle}/>
    		</div>
		)
	}
})

export default MatchAttributesComponent;