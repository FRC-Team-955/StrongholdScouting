import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

const teamContainer = {
    width: "100%",
    height: 254,
    paddingLeft: 10
}

const teamTextStyle = {
    width: "90%",
    margin: 0
}

const teamText = (
    <TextField floatingLabelText = "Team Comments" rows = {9} rowsMax = {9} style = {teamTextStyle} multiLine = {true}/>
)

const TeamComments = () => (
    <div className = "col-md-3 spacing">
        <Paper children = {teamText} style = {teamContainer}/>
    </div>
)

export default TeamComments;