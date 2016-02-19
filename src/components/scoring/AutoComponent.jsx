'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import TextField from 'material-ui/lib/text-field';
import Checkbox from 'material-ui/lib/checkbox';
import ScoreUnitComponent from './ScoreUnitComponent';

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
    margin: 35,
    fontSize: 20
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
        <div>
            <Checkbox label = "Cross Defense" style = {autoToggle}/>
        </div>
    </div>
)

const AutoComponent = () => (
    <div className = "col-md-3 spacing">
        <Paper children = {autoScore} style = {scoringContainer}/>
    </div>
)

export default AutoComponent;