import alt from '../../alt.js';

class TeleopActions {
	updateIncrementHighGoalsMade(team,match){
		this.dispatch(team,match);
	}
	
	updateIncrementHighGoalsAttempted(team,match){
		this.dispatch(team,match);
	}
	
	updateIncrementLowGoalsMade(team,match){
		this.dispatch(team,match);
	}
	
	updateIncrementLowGoalsAttempted(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementHighGoalsMade(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementHighGoalsAttempted(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementLowGoalsMade(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementLowGoalsAttempted(team,match){
		this.dispatch(team,match);
	}
}

export default TeleopActions;
