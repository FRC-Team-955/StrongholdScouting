import alt from '../../alt.js';

class PerformanceActions {
	updatePerformance(performanceRating,team,match){
		this.dispatch(performanceRating);
	}
	
	updateOffense(offenseRating,team,match){
		this.dispatch(offenseRating);
	}
	
	updateDefense(defenseRating,team,match){
		this.dispatch(defenseRating);
	}
}

export default PerformanceActions;
