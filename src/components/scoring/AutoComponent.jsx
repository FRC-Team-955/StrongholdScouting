'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import ScoreUnitComponent from './ScoreUnitComponent';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';

require('styles//scoring/Auto.css');

const highDiv = {
    width: "100%",
}
const leftStyleHigh = {
    width: 20,
    cssFloat: "left",
    marginLeft: 10
    
}

const textStyleHigh = {
    width: 50,
    marginLeft: 18,
    marginRight: 40
}

const rightStyleHigh = {
    width: 20,
}

const labelStyle = {
    width: 100
}

const scoringContainer = {
    width: "100%",
    //marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    height: 300
}

const autoToggle = {
    margin: 10,
    fontSize: 15
}

const autoDrop = {
	marginLeft: 10
}

const autoScore = (
	<div>
		<ScoreUnitComponent
			floatingLabelText="Auto High"
		/>
			
		<ScoreUnitComponent
			floatingLabelText="Auto Low"
		/>
		
        <div>
           <Checkbox label = "Reach Defense" style = {autoToggle}/>
        </div>
    </div>
)

const AutoComponent = React.createClass ({
	getInitialState: function(){
        return{
            value: 1,
			checked: false,
			enable: true
        }
    }, 
   
   change: function(event, index, value) {
	   this.setState({value})
   },
   
   disableToggle: function(){
	   this.setState({checked: !this.state.checked})
	   this.setState({enable: !this.state.enable})
   },
   
	render(){
		return(
			<div className = "col-md-3 spacing">
				<Paper style = {scoringContainer} children = {
					<div>
						{autoScore}
						<Checkbox label = "Defense Crossed" checked = {this.state.checked} onCheck = {this.disableToggle} style = {autoToggle}/>
							<SelectField maxHeight = {75} style = {autoDrop} value = {this.state.value} onChange = {this.change} disabled = {this.state.enable}>
       							<MenuItem value={1} primaryText="A1"/>
        						<MenuItem value={2} primaryText="A2"/>
								<MenuItem value={3} primaryText="B1"/>
        						<MenuItem value={4} primaryText="B2"/>
								<MenuItem value={5} primaryText="C1"/>
        						<MenuItem value={6} primaryText="C2"/>
								<MenuItem value={7} primaryText="D1"/>
        						<MenuItem value={8} primaryText="D2"/>
								<MenuItem value={9} primaryText="E1"/>
      						</SelectField>
					</div>
				}/>
    		</div>
		)
	}
});

export default AutoComponent;