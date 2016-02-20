var alt = require('../alt');

class TeleopActions{
	updateHighGoalsMade(amount){
		this.dispatch(amount);
	}
	
	updateHighGoalsAttempted(amount){
		this.dispatch(amount);
	}
	
	updateLowGoalsMade(amount){
		this.dispatch(amount);
	}
	
	updateLowGoalsAttempted(amount){
		this.dispatch(amount);
	}
}

export default alt.createActions(TeleopActions);