import React from 'react';
import Paper from 'material-ui/lib/paper';
import RaisedButton from 'material-ui/lib/raised-button'; 
import TextField from 'material-ui/lib/text-field';
import DefenseUnit from './defenseUnit';

const defenseContainer = {
    width: "100%",
    height: 300,
    paddingTop: 10,
    marginLeft: 0
}

const defenseStyle = {
    height: 90,
	//marginTop: 5
}

const topDefense = {
    //marginTop: 20
}

const totalStyle = {
    padding: 15,
    fontSize: 14
}

const totalText = {
    fontSize: 25,
    width: "100%"
}

const buttonStyle = {
	width: "50%"
}


const defenseButtons = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "A1: Portcullis"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "A2: Chival De Frise"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "B1: Moat"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "B2: Ramparts"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "C1: Drawbridge"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "C2: Sally Port"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "D1: Rock Wall"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "D2: Rough Terrain"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefenseUnit floatingLabelText = "E1: Low Wall"/>}/>
            </div>
        </div>
    </div>
)

const Defenses = () => (
    <div className = "col-md-6 spacing">  
        <Paper style = {defenseContainer} children = {defenseButtons}/>
    </div>
)

export default Defenses;