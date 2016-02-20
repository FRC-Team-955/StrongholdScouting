var alt = require('../alt');

class AutoActions{
	updateReachDefense(isReachDefense){
		this.dispatch(isReachDefense);
	}
	
	
	updateCrossDefense(isCrossDefense){
		this.dispatch(isCrossDefense);
	}
	
	updateHighGoals(highGoals){
		this.dispatch(highGoals);
	}
	
	updateLowGoals(lowGoals){
		this.dispatch(lowGoals);
	}
}

module.exports = alt.createActions(AutoActions);