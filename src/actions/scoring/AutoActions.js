class AutoActions {
	updateReachDefense(team,match){
		this.dispatch(team,match);
	}
	
	updateCrossDefense(isCrossDefense,team,match){
		this.dispatch(isCrossDefense,team,match);
	}
	
	updateIncrementHighGoals(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementHighGoals(team,match){
		this.dispatch(team,match);
	}
	
	updateIncrementLowGoals(team,match){
		this.dispatch(team,match);
	}
	
	updateDecrementLowGoals(team,match){
		this.dispatch(team,match);
	}
}

export default AutoActions;
