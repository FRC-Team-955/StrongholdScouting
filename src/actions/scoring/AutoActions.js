var ScoringConstants = require('../../constants/ScoringConstants');
var AppDispatcher = require('../../components/AppDispatcher');

var AutoActions = {
	updateReachDefense: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.ReachedDefense,
			team: team,
			match: match,
		});
	},
	
	updateCrossDefense: function(value,team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.CrossDefense,
			team: team,
			value: value,
			match: match
		})
	},
	
	updateCrossedDefense: function(team,match){
		console.log("action called");
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.CrossedDefense,
			team: team,
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
	
	updateDecrementHighGoals: function(team,match){
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
	
	updateDecrementLowGoals: function(team,match){
		AppDispatcher.handleViewAction({
			actionType: ScoringConstants.DecrementLowAutoGoals,
			team: team,
			match: match
		})
	}
}

export default AutoActions;
