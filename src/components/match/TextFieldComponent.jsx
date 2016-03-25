'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableRow from 'material-ui/lib/table/table-row';
import ScheduleComponent from './ScheduleComponent';
import MatchActions from '../../actions/match/MatchActions'

require('styles//match/TextField.css');

const TextFieldComponent = React.createClass({
    
    getInitialState(){
      return {
        matchNum : this.props.matchNum,
		textID : this.props.textID
      }
  },

  handleChange(event){
    var textVal = event.target.value
    this.setState({
      value: textVal,
    });
	
	MatchActions.updateValue(this.state.matchNum,this.state.textID,textVal);
  },

  render(){
    return (
      <div>
        <TextField
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
})

export default TextFieldComponent;