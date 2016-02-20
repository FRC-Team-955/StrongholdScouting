'use strict';

import React from 'react';
import Paper from 'material-ui/lib/paper';
import DefensesUnitComponent from './DefensesUnitComponent';

require('styles//scoring/Defenses.css');

const defenseContainer = {
    width: '100%',
    height: 300,
    paddingTop: 10,
    marginLeft: 0
}

const defenseStyle = {
    height: 90
	//marginTop: 5
}

const defenseButtons = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "A2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B1"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "B2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "C2"/>}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D1"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "D2"/>}/>
            </div>
            <div className = "col-md-4">
                <Paper style = {defenseStyle} fullWidth=  {true} children = {<DefensesUnitComponent floatingLabelText = "E1"/>}/>
            </div>
        </div>
    </div>
)

const DefensesComponents = () => (
    <div className = "col-md-6 spacing">  
        <Paper style = {defenseContainer} children = {defenseButtons}/>
    </div>
)

export default DefensesComponents;