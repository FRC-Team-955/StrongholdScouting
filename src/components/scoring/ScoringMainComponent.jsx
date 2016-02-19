'use strict';

require('styles//scoring/ScoringMain.css');

import React from 'react';
import AutoComponent from './AutoComponent';
import TeleopComponent from './TeleopComponent';
import DefensesComponent from './DefensesComponent';
import PerformanceComponent from './PerformanceComponent';
import TeamCommentsComponent from './TeamCommentsComponent';
import MatchCommentsComponents from './MatchCommentsComponent';
import MatchAttributesComponents from './MatchAttributesComponent';
import TeamAttributesComponent from './TeamAttributesComponent';

const ScoringMainComponent = () => (
    <div>
        <div className = "row">
            <AutoComponent/>
            <TeleopComponent/>
            <DefensesComponent/>
            <PerformanceComponent/>         
        </div>
        <div className = "row">
            <TeamCommentsComponent/>
            <MatchCommentsComponents/>
            <MatchAttributesComponents/>
            <TeamAttributesComponent/>
        </div>
    </div>
)

export default ScoringMainComponent;