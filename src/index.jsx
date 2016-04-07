import React from 'react';
import ReactDOM from 'react-dom';
import NavbarControllerComponent from './components/NavbarControllerComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ScheduleComponent from './components/match/ScheduleComponent';
import ScoringControllerComponent from './components/ScoringControllerComponent';
import TeamListComponent from './components/analysis/TeamListComponent';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

require("styles/bootstrap.min.css");
require("styles/App.css");

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<NavbarControllerComponent/>, document.getElementById('navbarController'));
ReactDOM.render(<ScoringControllerComponent/>, document.getElementById('matchScoring'));
ReactDOM.render(<ScheduleComponent/>, document.getElementById('matchTable'));
ReactDOM.render(<TeamListComponent/>, document.getElementById('analysisPreview'));