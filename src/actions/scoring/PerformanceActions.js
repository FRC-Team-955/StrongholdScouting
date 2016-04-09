var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var PerformanceActions = {
	updatePerformance: function(performanceRating,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Performance,
			team: team,
			match: match,
			performanceRating: performanceRating
		});
	},
	
	updateOffense: function(offenseRating,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Offense,
			team: team,
			match: match,
			offenseRating: offenseRating
		});
	},
	
	updateDefense: function(defenseRating,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.Defense,
			team: team,
			match: match,
			defenseRating: defenseRating
		});
	}
}

export default PerformanceActions;
