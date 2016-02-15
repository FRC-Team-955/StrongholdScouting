import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/lib/svg-icons/navigation/chevron-right';
import Colors from 'material-ui/lib/styles/colors';
import TextField from 'material-ui/lib/text-field';
import ScoreUnit from './scoreUnit';

const scoringContainer = {
    width: "100%",
    //marginLeft: 20,
    //marginTop: 10,
    paddingBottom: 20,
    height: 300
}

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

const leftStyleLow = {
    width: 20,
    cssFloat: "left",
    marginLeft: 10
    
}

const textStyleLow = {
    width: 50,
    marginLeft: 20,
    marginRight: 40
}

const rightStyleLow = {
    width: 20
}

const labelStyle = {
    width: 100
} 

const highGoal = (
    <div>
        <ScoreUnit
			floatingLabelText="High Goal"
		/>
		
        <ScoreUnit
			floatingLabelText="High Failed"
		/>
		
        <ScoreUnit
			floatingLabelText="Low Goal"
		/>
		
        <ScoreUnit
			floatingLabelText="Low Failed"
		/>
		
    </div>
)

const Scoring = () => (
    <div className = "col-md-3 spacing">
        <Paper children = {highGoal} style = {scoringContainer}/>
    </div>
)

export default Scoring;