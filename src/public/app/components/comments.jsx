import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

const teamContainer = {
    width: "100%",
    height: 127,
    paddingLeft: 10
}

const teamTextStyle = {
    width: "90%",
    margin: 0
}

const matchContainer = {
    width: "100%",
    height: 127,
    padding: 10
}

const matchTextStyle = {
    width: "90%",
    margin: 0
}

const teamText = (
    <TextField floatingLabelText = "Team Comments" rows = {9} rowsMax = {9} style = {teamTextStyle} multiLine = {true}/>
)

const matchText = (
    <TextField floatingLabelText = "Match Comments" rows = {9} rowsMax = {9} style = {matchTextStyle} multiLine = {true}/>
)

const Comments = () => (
    <div className = "col-md-3 spacing">
        <Paper children = {teamText} style = {teamContainer}/>
		<Paper children = {matchText} style = {matchContainer}/>
    </div>
)

export default Comments;