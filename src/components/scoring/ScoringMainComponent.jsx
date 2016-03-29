'use strict';

require('styles//scoring/ScoringMain.css');

import React from 'react';
import AutoComponent from './AutoComponent';
import TeleopComponent from './TeleopComponent';
import DefensesComponent from './DefensesComponent';
import PerformanceComponent from './PerformanceComponent';
import MatchAttributesComponent from './MatchAttributesComponent';
import TeamAttributesComponent from './TeamAttributesComponent';
import CommentsComponent from './CommentsComponent';

require('styles//scoring/ScoringMain.css');

const ScoringMainComponent = React.createClass({
	render(){
		<div>
			<div className = "row">
				  
				<DefensesComponent/>   
				<TeleopComponent
					 scoringData = {this.props.scoringData}
					 currentTeam =  {this.props.matchData.currentTeam}
					 currentMatch = {this.props.currentMatch}
					 
				/>
			</div>
			<div className = "row">
				<PerformanceComponent/>
				<CommentsComponent/>
				<MatchAttributesComponent/>
				<TeamAttributesComponent/>
			</div>   
		</div>
	}
})

export default ScoringMainComponent;

/*
 <div className = "row">
            <AutoComponent/>  
			<DefensesComponent/>   
			<TeleopComponent/>
        </div>
		<div className = "row">
            <PerformanceComponent/>
			<CommentsComponent/>
			<MatchAttributesComponent/>
			<TeamAttributesComponent/>
        </div>
	*/