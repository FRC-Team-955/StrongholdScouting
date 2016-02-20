var alt = require('../alt');

class PerformanceActions{
	updatePerformance(performanceRating){
		this.dispatch(performanceRating);
	}
	
	updateOffense(offenseRating){
		this.dispatch(offenseRating);
	}
	
	updateDefense(defenseRating){
		this.dispatch(defenseRating);
	}
}

module.exports = alt.createActions(PerformanceActions);