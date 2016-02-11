import React from 'react';
import Slider from 'material-ui/lib/slider';
import Paper from 'material-ui/lib/paper';

const performance = (
    <Slider  description = "Performance" step = {0.5}/>
)

const offense = (
    <Slider description = "Offense" step = {0.5}/>
)

const defense = (
    <Slider description = "Defense" step = {0.5}/>
)

const ratingContainer = {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    height: 100
}


const Rating = () => (
    <div className = "col-md-3 spacing">
        <Paper style = {ratingContainer} children = {performance}/>
        <Paper style = {ratingContainer} children = {offense}/>
        <Paper style = {ratingContainer} children = {defense}/>
    </div>
)

export default Rating;