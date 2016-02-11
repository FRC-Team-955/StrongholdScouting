import React from 'react';
import Auto from './auto';
import Scoring from './scoring';
import Defenses from './defenses';
import Rating from './rating';
import TeamComments from './teamComments';
import MatchComments from './matchComments';
import MatchToggle from './matchToggle';
import TeamToggle from './teamToggle';

const MatchScoring = () => (
    <div>
        <div className = "row">
            <Auto/>
            <Scoring/>
            <Defenses/>
            <Rating/>         
        </div>
        <div className = "row">
            <TeamComments/>
            <MatchComments/>
            <MatchToggle/>
            <TeamToggle/>
        </div>
    </div>
)

export default MatchScoring;