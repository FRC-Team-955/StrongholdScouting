'use strict';

import React from 'react';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

require('styles//scoring/MatchSelect.css');

const selectStyle = {
    width: "100%",
}

const MatchSelectComponent = React.createClass({
	getInitialState: function(){
		return{
			value: 1
		}
	}, 
   
	change: function(event, index, value) {
		this.setState({value})
	},
   
	render(){
		return(
			<SelectField style = {selectStyle} value = {this.state.value} onChange = {this.change}><MenuItem  primaryText = "#1" value = {1}/><MenuItem  primaryText = "#2" value = {2}/></SelectField>
		)
	}
});

export default MatchSelectComponent;
