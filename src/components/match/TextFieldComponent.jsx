'use strict';

import React from 'react';
import TextField from 'material-ui/lib/text-field';
import TextFieldActions from '../../actions/match/TextFieldActions'

require('styles//match/TextField.css');

const TextFieldComponent = React.createClass({
    
    getInitialState(){
      return {
        value: this.props.textValue,
        key : this.props.key,
        matchNum : this.props.matchNum
      }
  },

  handleChange(event){
    var textVal = event.target.value
    console.log(textVal + " value comp");
    console.log(this.state.key + " key comp");
    console.log(this.state.match + " match comp");
    TextFieldActions.updateValue(this.state.matchNum,this.state.key,textVal);
    this.setState({
      value: textVal,
    });
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
