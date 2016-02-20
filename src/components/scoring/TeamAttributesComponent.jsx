'use strict'

import React from 'react';
import Paper from 'material-ui/lib/paper';
import Checkbox from 'material-ui/lib/checkbox'; 

require('styles//scoring/TeamAttributes.css');

const style = {
    container: {
        width: "100%",
        height: 254
    },
    boxContainer: {
        padding: 0
    },
    box: {
        marginTop: 50,
        paddingLeft: 5
    }
}

const toggle = (
    <div className = "container-fluid">
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Auto" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Challenge" style = {style.box}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Spy" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Human Player" style = {style.box}/>
            </div>
        </div>
        <div className = "row">
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Vision" style = {style.box}/>
            </div>
            <div className = "col-md-6" style = {style.boxContainer}>
                <Checkbox label = "Broken" style = {style.box}/>
            </div>
        </div>
    </div>
)

const TeamAttributesComponent = () => (
    <div className = "col-md-3 spacing">
        <Paper style = {style.container} children = {toggle}/>
    </div>
)

export default TeamAttributesComponent;