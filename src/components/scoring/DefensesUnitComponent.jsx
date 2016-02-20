'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';

require('styles//scoring/DefensesUnit.css');

const highDiv = {
    width: "100%",
}
const buttonStyle = {
	width: "50%"
}

const textStyle = {
	height: 40,
	width: "70%",
	marginLeft: "10%"
}

const titleStyle = {
	width: "2%",
	height: 0
}

const floatingLabelStyle = {
    width: 100
}

const autoToggle = {
    margin: 35,
}

const DefensesUnitComponent = React.createClass({
	getInitialState() {
		return {
			value : 0
		}
	},
		
	decrement() {
		this.setState({
			value: this.state.value > 0 ? this.state.value -= 1 : this.state.value
		})
	},
	
	increment() {
		this.setState({
			value : this.state.value += 1
		})
	},

	
	render() {
		return (
			<div>
				<div style = {titleStyle}> {this.props.label}</div>
				<TextField style = {textStyle} errorText = {this.props.floatingLabelText} value = {this.state.value}/>
				<RaisedButton children = {<ChevronLeft/>} style = {buttonStyle} onTouchTap = {this.decrement}/>
				<RaisedButton children = {<ChevronRight/>} style = {buttonStyle} onTouchTap = {this.increment}/>
				
			</div>
		)
	}
})

export default DefensesUnitComponent;
