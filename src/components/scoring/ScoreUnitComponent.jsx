'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';

require('styles//scoring/Scoreunit.css');

const leftStyle = {
    width: 20,
    cssFloat: 'left',
    marginLeft: 10
    
}

const textStyle = {
    width: 50,
    marginLeft: 18,
    marginRight: 40
}

const rightStyle = {
    width: 20
}

const floatingLabelStyle = {
    width: 100
}

class ScoreUnitComponent extends React.Component{
	constructor(props){
		super(props);
		this.decrement = this.decrement.bind(this);
		this.increment = this.increment.bind(this);
		this.state = {
			value : 0
		};
	}
		
	decrement() {
		this.setState({
			value : this.state.value > 0 ? this.state.value -= 1 : this.state.value
		});
	}
	
	increment() {
		this.setState({
			value : this.state.value += 1
		});
	}

	render() {
		return (
			<div>
				<RaisedButton children = {<ChevronLeft/>} style = {leftStyle} onTouchTap = {this.decrement}/>
				<TextField style = {textStyle} floatingLabelText = {this.props.floatingLabelText} floatingLabelStyle = {floatingLabelStyle} value = {this.state.value}/>
				<RaisedButton children = {<ChevronRight/>} style = {rightStyle} onTouchTap = {this.increment}/>
			</div>
		)
	}
}

export default ScoreUnitComponent;