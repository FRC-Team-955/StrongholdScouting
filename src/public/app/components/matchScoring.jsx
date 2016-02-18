import React from 'react';
import Auto from './auto';
import Scoring from './scoring';
import Defenses from './defenses';
import Rating from './rating';
import Comments from './comments';
import MatchToggle from './matchToggle';
import TeamToggle from './teamToggle';

const MatchScoring = () => (
    <div>
        <div className = "row">
            <Auto/>
			<Defenses/>	
            <Scoring/>        
        </div>
        <div className = "row">
            <Rating/>
            <Comments/>
            <MatchToggle/>
            <TeamToggle/>
        </div>
    </div>
)

export default MatchScoring;