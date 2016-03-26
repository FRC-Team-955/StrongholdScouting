var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var AutoActions = {
	updateReachDefense: function(team,match,value){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ReachedDefense,
			team: team,
			match: match,
			value: value
		});
	},
	
	updateCrossDefense: function(value,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.CrossDefense,
			isCrossDefense: value,
			match: match
		})
	},
	
	updateIncrementHighGoals: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementHighAutoGoals,
			team: team,
			match: match
		})
	},
	
	updateDecrementHighGoals(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementHighAutoGoals,
			team: team,
			match: match
		})
	},
	
	updateIncrementLowGoals: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.IncrementLowAutoGoals,
			team: team,
			match: match
		})
	},
	
	updateDecrementLowGoals(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementLowAutoGoals,
			team: team,
			match: match
		})
	}
}

export default AutoActions;
