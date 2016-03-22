import React from 'react';
import ReactDOM from 'react-dom';
import NavbarComponent from './components/NavbarComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ScheduleComponent from './components/match/ScheduleComponent';
import ScoringMainComponent from './components/scoring/ScoringMainComponent';
import TeamListComponent from './components/analysis/TeamListComponent';
import ScoringControllerComponent from './components/scoring/ScoringControllerComponent';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

require("styles/bootstrap.min.css");
require("styles/App.css");

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<NavbarComponent/>, document.getElementById('navbar'));
ReactDOM.render(<ScoringMainComponent/>, document.getElementById('matchScoring'));
ReactDOM.render(<ScheduleComponent/>, document.getElementById('matchTable'));
ReactDOM.render(<TeamListComponent/>, document.getElementById('analysisPreview'));