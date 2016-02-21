import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MatchTable from './components/matchTable';
import MatchScoring from './components/matchScoring';
import AnalysisPreview from './components/analysisPreview';
import AllianceSelection from './components/AllianceSelectionComponent';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()



// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<Navbar/>, document.getElementById('navbar'));
ReactDOM.render(<MatchScoring/>, document.getElementById('matchScoring'));
ReactDOM.render(<MatchTable/>, document.getElementById('matchTable'));
ReactDOM.render(<AnalysisPreview/>, document.getElementById('analysisPreview'));
ReactDOM.render(<AllianceSelection/>, document.getElementById('allianceSelection'));
