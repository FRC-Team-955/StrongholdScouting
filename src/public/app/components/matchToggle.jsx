import React from 'react';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox'; 

const matchToggleContainer = {
    width: "100%",
    height: 127.5,
    padding: 10
}

const style = {
    match: {
        width: "100%"
    },
    text: {
        fontSize: 20
    }
}

const capture = (
    <div style = {style.match}>
        <Checkbox label = "Capture" style = {style.text}/>
    </div>
)

const breach = (
    <div style = {style.match}>
        <Checkbox label = "Breach" style = {style.text}/>
    </div>
)   

const MatchToggle = () => (
    <div className = "col-md-3 spacing">
        <Paper style = {matchToggleContainer} children = {breach}/>
        <Paper style = {matchToggleContainer} children = {capture}/>
    </div>
)

export default MatchToggle;