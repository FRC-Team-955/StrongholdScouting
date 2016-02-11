import React from 'react';
import TextField from 'material-ui/lib/text-field';
import Paper from 'material-ui/lib/paper';

const matchContainer = {
    width: "100%",
    height: 254,
    padding: 10
}

const matchTextStyle = {
    width: "90%",
    margin: 0
}

const matchText = (
    <TextField floatingLabelText = "Match Comments" rows = {9} rowsMax = {9} style = {matchTextStyle} multiLine = {true}/>
)

const MatchComments = () => (
    <div className = "col-md-3 spacing">
        <Paper children = {matchText} style = {matchContainer}/>
    </div>
)

export default MatchComments;
