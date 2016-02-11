import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'; 
import TextField from 'material-ui/lib/text-field';

const defenseContainer = {
    width: "100%",
    height: 300,
    paddingTop: 10,
    marginLeft: 0
}

const defenseStyle = {
    height: 72.4063
}

const topDefense = {
    marginTop: 20
}

const totalStyle = {
    padding: 15,
    fontSize: 14
}

const totalText = {
    fontSize: 25,
    width: "100%"
}

const defenseButtons = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
            <div className = "col-md-4">
                <RaisedButton style = {defenseStyle} fullWidth=  {true}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-8" style = {totalStyle}>
                Total Defenses Crossed:
            </div>
            <div className = "col-md-4">
                <TextField style = {totalText}/>
            </div>
        </div>
    </div>
)

const Defenses = () => (
    <div className = "col-md-3 spacing">  
        <Paper style = {defenseContainer} children = {defenseButtons}/>
    </div>
)

export default Defenses;